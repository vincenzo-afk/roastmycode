import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";

const root = process.cwd();
const requiredFiles = [
  ".env.example",
  ".gitignore",
  "README.md",
  "api/refactor.js",
  "api/roast.js",
  "assets/roastmycode-logo.png",
  "roastmycode.html",
  "robots.txt",
  "site.webmanifest",
  "sitemap.xml",
  "vercel.json",
];

async function requireFile(file) {
  await access(path.join(root, file), constants.R_OK);
}

async function read(file) {
  return readFile(path.join(root, file), "utf8");
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

for (const file of requiredFiles) await requireFile(file);

const vercel = JSON.parse(await read("vercel.json"));
assert(vercel.rewrites?.[0]?.destination === "/roastmycode.html", "vercel.json must route / to /roastmycode.html");
assert(vercel.functions?.["api/*.js"]?.maxDuration === 10, "vercel.json must retain the configured API duration");

const manifest = JSON.parse(await read("site.webmanifest"));
assert(manifest.name === "ROASTMYCODE — AI Code Judgment System", "site.webmanifest has an unexpected app name");
assert(manifest.icons?.some((icon) => icon.src === "/assets/roastmycode-logo.png"), "site.webmanifest must reference the supplied logo");

const html = await read("roastmycode.html");
for (const needle of [
  "<html",
  "</html>",
  "https://roastmycode-lemon.vercel.app/",
  "https://github.com/vincenzo-afk/roastmycode",
  "application/ld+json",
  "/assets/roastmycode-logo.png",
]) {
  assert(html.includes(needle), `roastmycode.html is missing required content: ${needle}`);
}

const roastApi = await read("api/roast.js");
const refactorApi = await read("api/refactor.js");
for (const [file, source] of [["api/roast.js", roastApi], ["api/refactor.js", refactorApi]]) {
  assert(source.includes("process.env.GROQ_API_KEY"), `${file} must read GROQ_API_KEY from the server environment`);
  assert(source.includes("req.method !== 'POST'"), `${file} must reject unsupported methods`);
}

const sitemap = await read("sitemap.xml");
const robots = await read("robots.txt");
assert(sitemap.includes("https://roastmycode-lemon.vercel.app/"), "sitemap.xml has an unexpected canonical URL");
assert(robots.includes("https://roastmycode-lemon.vercel.app/sitemap.xml"), "robots.txt must reference the sitemap");

const trackedText = await Promise.all(["README.md", "roastmycode.html", "api/roast.js", "api/refactor.js", ".env.example"].map(read));
const tokenPatterns = [
  /ghp_[A-Za-z0-9]{20,}/,
  /github_pat_[A-Za-z0-9_]{20,}/,
  /gsk_[A-Za-z0-9]{20,}/,
];
for (const pattern of tokenPatterns) {
  assert(!trackedText.some((source) => pattern.test(source)), `Potential credential detected matching ${pattern}`);
}

console.log("Repository validation passed.");
