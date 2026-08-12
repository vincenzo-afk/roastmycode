# ROASTMYCODE Design Direction

## Three initial approaches

### Theme Name: Terminal Tribunal
Very Brief Intro: A high-contrast developer courtroom with scanlines, evidence panels, and a sharp red-orange judgment palette. It turns code review into a theatrical diagnostic ritual.
Probability: 0.07

### Theme Name: Ember Editorial
Very Brief Intro: A warmer, magazine-like treatment that pairs black paper texture with ember accents and oversized typographic verdicts. It makes technical criticism feel collectible and shareable.
Probability: 0.04

### Theme Name: Signal Archive
Very Brief Intro: A quiet, archival interface inspired by incident reports and observability consoles. Cool cyan annotations carry the analysis while red marks identify the damage.
Probability: 0.09

## Selected approach: Terminal Tribunal

### Design Movement
Neo-brutalist cyber-noir, filtered through terminal interfaces and forensic incident-response dashboards.

### Core Principles
1. **Evidence before decoration:** Every flourish should support the feeling of inspection, diagnosis, or judgment.
2. **Heat as hierarchy:** Red and orange signal risk and consequence; cyan and green signal system state, not decoration.
3. **Theatrical restraint:** Motion and scanline texture build tension, but the code editor and results remain the center of gravity.
4. **Readable under pressure:** Dense UI is balanced with strong contrast, explicit labels, visible focus states, and responsive spacing.

### Color Philosophy
The interface starts with near-black terminal surfaces so the user's code and roast results feel like evidence under examination. Ember red and orange communicate pain, risk, and the fun of the roast; cyan and terminal green communicate system telemetry and successful progression. Cream-white text gives the brand mark and major verdicts a human, slightly irreverent edge.

### Layout Paradigm
Use a persistent command-bar-like navigation and a vertical evidence flow rather than a centered marketing grid. The hero establishes the judgment, the editor becomes the primary evidence bay, and results unfold as a dossier of metrics, verdicts, and shareable artifacts.

### Signature Elements
1. The user-supplied circular code-and-flames emblem as the primary mark, favicon, social preview, and roast-card stamp.
2. Thin diagnostic rules, bracket corners, and scanline overlays that frame important panels without making every surface a rounded card.
3. Short monospace labels such as `// SYSTEM STATUS` and `[ CODE CRIMES ]` to create a recognizable forensic language.

### Interaction Philosophy
Interactions should feel like operating an instrument: explicit, immediate, and slightly dramatic. Buttons acknowledge input with a brief press response, the roast action reveals a staged scan sequence, and share/download controls remain obvious without interrupting the evidence flow.

### Animation
Use short transitions for hover and focus states, reserve staged typing and counter animations for the roast event, and respect `prefers-reduced-motion`. Avoid continuous motion that competes with code entry. Scanlines and glows should be subtle enough that text remains stable and readable.

### Typography System
Use **Space Grotesk** for interface copy and **Share Tech Mono** for code, labels, counters, and system messages. Headlines are compact, bold, and uppercase when they represent a verdict; body copy stays sentence case with generous line-height. Monospace is reserved for operational language so it retains meaning.

### Brand Essence
ROASTMYCODE is the playful code-judgment tool for developers who want specific, memorable feedback instead of another polite lint report. Personality: **incisive, theatrical, self-aware**.

### Brand Voice
Headlines are blunt and quotable. CTAs sound like an invitation to submit evidence, not a generic conversion prompt. Microcopy uses deadpan technical language with just enough mischief.

Example lines:

> Paste the evidence. We’ll identify the crime.

> Your code has been processed. Your dignity is pending.

### Wordmark & Logo
The wordmark is a compact uppercase name paired with the circular code-and-flames emblem. The emblem acts as the recognizable mark at small sizes; the wordmark uses the existing Space Grotesk treatment with a controlled heat gradient rather than a default logo font.

### Signature Brand Color
**Ember Verdict — `#ff3b30`**. It is hotter and more alert than a generic red, pairing naturally with the supplied orange-red flame mark while retaining strong contrast on terminal-black surfaces.
