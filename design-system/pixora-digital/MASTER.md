# PIXORA DIGITAL — Design System Master

> Generated using UI/UX Pro Max Design Intelligence  
> Project: PIXORA DIGITAL (Hyderabad, India)  
> Archetype: Creative Digital Agency & High-End Technology Studio

---

## 1. Visual Direction & Style Archetype

- **Primary Style**: **Editorial Modern + Asymmetric Bento Grid** (derived from UI UX Pro Max `Editorial Grid / Magazine` and `Bento Box Grid`).
- **Secondary Infusion**: **Exaggerated Minimalism** (high-contrast typographic hierarchy, confident oversized hero headlines, disciplined negative space, subtle borders).
- **Core Philosophy**:
  - *No generic purple-blue gradient overlays.*
  - *No emoji icons used as structural elements* (vector-only Lucide icons with consistent 1.75px stroke).
  - *No repetitive identical card templates.*
  - *Art-directed layouts with intentional visual pacing and asymmetry.*

---

## 2. Color Palette & Semantic Tokens

### Light Theme (Crisp Editorial Canvas)
```css
:root {
  --color-bg: #F8FAFC;              /* Clean gallery off-white */
  --color-surface: #FFFFFF;         /* Elevated card surface */
  --color-surface-subtle: #F1F5F9;  /* Secondary background */
  --color-text-primary: #090A0F;    /* Deep obsidian (contrast > 14:1) */
  --color-text-secondary: #475569;  /* Balanced slate body */
  --color-text-muted: #64748B;      /* Meta labels & hints */
  --color-border: #E2E8F0;          /* Refined 1px architectural divider */
  --color-border-hover: #CBD5E1;
  --color-accent: #2563EB;          /* Electric Cobalt */
  --color-accent-hover: #1D4ED8;
  --color-signal-amber: #D97706;    /* Amber warm badge */
  --color-signal-green: #059669;    /* WhatsApp green */
}
```

### Dark Theme (Cinematic Midnight Obsidian)
```css
.dark {
  --color-bg: #090A0F;              /* Deep obsidian slate */
  --color-surface: #11131C;         /* Elevated card surface */
  --color-surface-subtle: #181B26;  /* Secondary background */
  --color-text-primary: #F8FAFC;    /* Crisp off-white */
  --color-text-secondary: #94A3B8;  /* Readable light slate */
  --color-text-muted: #64748B;      /* Meta captions */
  --color-border: #1E2230;          /* Subtle midnight border */
  --color-border-hover: #2D3348;
  --color-accent: #3B82F6;          /* Luminous cobalt */
  --color-accent-hover: #60A5FA;
  --color-signal-amber: #F59E0B;
  --color-signal-green: #10B981;
}
```

---

## 3. Typography Hierarchy

- **Display & Section Headings**: `Plus Jakarta Sans` / `Outfit`
  - Hero Display: `text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] leading-[1.08]`
  - Section Title: `text-3xl sm:text-4xl font-bold tracking-[-0.025em] leading-[1.15]`
  - Subsection / Card Heading: `text-lg sm:text-xl font-bold tracking-[-0.015em]`
- **Body & Editorial Reading**: `Inter` / `Plus Jakarta Sans`
  - Lead Paragraph: `text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-[1.65] max-w-2xl`
  - Body Text: `text-sm sm:text-base leading-[1.6]`
  - Technical / Badges / Numbers: `text-xs font-mono uppercase tracking-[0.1em]`

---

## 4. Spacing & Radius Rhythm (8dp Grid)

- **Section Spacing**: `py-20 lg:py-28`
- **Card Padding**: `p-6 sm:p-8 lg:p-10`
- **Component Gap**: `gap-4 sm:gap-6 lg:gap-8`
- **Border Radius**:
  - Cards: `rounded-2xl` to `rounded-3xl` (`16px` to `24px`)
  - Buttons / Inputs: `rounded-xl` (`12px`)
  - Badges / Pills: `rounded-full` (`9999px`)
- **Tap Targets**: Minimum `44px x 44px` on all interactive touchpoints.

---

## 5. Component Specifications & Interactions

1. **Header Navigation**:
   - Fixed header with transparent-to-scrim backdrop blur transition (`backdrop-blur-md`).
   - Active route indicator with smooth subtle underline/pill.
   - Theme toggle button with persistent `localStorage` synchronization.
   - Mobile menu with full-screen or sliding drawer, animated hamburger, and 44px tap targets.
2. **Hero Composition**:
   - Asymmetric split: Strong editorial typography on the left with badge indicator; interactive live website style viewport switch on the right (with Desktop / Mobile viewport switcher toggle).
   - Scroll cue with gentle keyframe pulse.
3. **Interactive Demo Showcase**:
   - Filter bar with category counts.
   - Desktop and Mobile device frame preview switcher.
   - Full live demo links with route transitions.
4. **Services Grid**:
   - Asymmetric bento cards highlighting business impact (e.g. "Conversion Rate", "Mobile Velocity", "WhatsApp Direct").
5. **Process Timeline**:
   - 6-step editorial sequence: `01 Discovery` → `02 Strategy & Design` → `03 Development` → `04 Testing` → `05 Launch` → `06 Support`.
6. **WhatsApp Integration**:
   - Floating chat trigger with online pulse indicator.
   - Form submission automatically formats clean structured WhatsApp messages and opens `https://wa.me/918121507323`.
7. **Accessibility (WCAG 2.1 AA)**:
   - All decorative icons have `aria-hidden="true"`.
   - All form inputs have explicit labels and inline validation.
   - Focus rings: `focus-visible:ring-2 focus-visible:ring-blue-500`.
   - Dark/Light contrast verified `>= 4.5:1`.

