# 05_DESIGN_RULES.md

# Aerius.to Design Rules

## Purpose

This document defines the visual and interaction design rules for the `Aerius.to` frontend product shell.

The page should look like a serious AI workspace, not a generic landing page and not a generic chatbot SaaS template.

The design must support the positioning:

Aerius is a cognitive AI workspace for traceable, domain-aware reasoning in high-stakes environments.

---

## Design Goal

The interface should communicate:

* intelligence
* trust
* calmness
* technical depth
* medical-grade clarity
* product readiness
* preview honesty
* future platform direction

The page should feel like the early shell of a serious product, not a temporary placeholder.

---

## Product Feel

Aerius.to should feel like:

* ChatGPT/Gemini-level familiar interface
* premium cognitive workspace
* clinical-tech product
* calm enterprise AI interface
* traceable reasoning dashboard
* future medical AI workspace

It should not feel like:

* generic chatbot SaaS
* customer-support bot builder
* marketing-heavy startup page
* crypto dashboard
* hospital stock template
* childish AI toy
* overly colorful demo
* fake medical app

---

## Visual Direction

Recommended visual keywords:

```txt
Cognitive workspace
Medical-grade clarity
Calm intelligence
Traceable reasoning
Technical confidence
Premium dark interface
Structured decision support
```

---

## Color Direction

Use dark mode first.

Recommended base direction:

* deep dark background
* slightly lighter panels
* soft borders
* subtle contrast
* controlled accent color
* no loud gradients
* no colorful SaaS rainbow palette

Suggested palette role names:

```txt
Background
Surface
Surface Elevated
Border Subtle
Text Primary
Text Secondary
Text Muted
Accent
Accent Soft
Warning Soft
Success Soft
Preview Badge
```

Implementation may map these to existing project tokens if available.

---

## Dark Mode Rules

The page should be dark by default.

Rules:

* Background should feel deep but not pure black.
* Panels should be distinguishable but not high-contrast blocks.
* Borders should be subtle.
* Text must remain highly readable.
* Avoid excessive glow.
* Avoid strong neon.
* Avoid gradients that reduce seriousness.

Recommended feel:

```txt
Dark background + soft glass-like panels + precise typography + restrained accent
```

---

## Typography Rules

Typography should be:

* clean
* readable
* modern
* not playful
* not overly futuristic
* not cramped

Hierarchy:

### Hero Title

Large, calm, confident.

### Subtitle

Medium, clear, explanatory.

### Supporting Text

Smaller, muted, readable.

### Panel Labels

Small, structured, technical.

### Trace Content

Readable and scannable.

Avoid:

* tiny text in trace panel
* too many font weights
* decorative fonts
* all caps everywhere
* excessive letter spacing

---

## Layout Rules

Desktop layout should use:

* left sidebar
* center chat workspace
* right reasoning trace panel

The interface should feel like a product workspace.

Do not center everything like a normal landing page.

Recommended desktop structure:

```txt
Preview Banner
App Shell
  Sidebar
  Chat Workspace
  Trace Panel
Lower Sections
  Medical First
  Technical Atlas
Footer
```

---

## Spacing Rules

Use generous spacing.

The interface should feel calm, not crowded.

Rules:

* Panels need breathing room.
* Chat messages should be easy to scan.
* Trace sections should have clear separation.
* CTA buttons should be visible but not aggressive.
* Sidebar items should not be too dense.
* Mobile layout should avoid horizontal overflow.

---

## Border and Panel Rules

Panels should use:

* rounded corners
* subtle borders
* light background elevation
* consistent padding

Avoid:

* thick borders
* harsh outlines
* excessive box shadows
* too many nested boxes
* random border radius values

Recommended panel types:

```txt
Main workspace panel
Sidebar panel
Trace panel
Domain card
Preview notice
CTA block
```

Each should look related.

---

## Chat Workspace Rules

The chat area should look familiar but distinct.

It may resemble modern AI assistant interfaces, but must include Aerius-specific elements:

* trace preview
* evidence structure
* risk indicators
* human review gate
* medical-first positioning

Rules:

* Do not make it look like a simple clone.
* Do not put all differentiation in marketing copy.
* The trace panel must visually prove the difference.

---

## Chat Message Design

User message:

* aligned clearly as user input
* compact and readable
* should not look like a clinical record

Aerius message:

* calm response style
* structured but not too long
* must include preview disclaimer or meta label when needed

System/preview message:

* muted
* clear
* non-alarming

Avoid:

* fake typing indicators
* fake loading states implying real backend
* medical urgency colors unless purely illustrative
* animated “AI thinking” that suggests live reasoning

---

## Input Bar Rules

The input bar should show future direction but remain honest.

Recommended first version:

* input visible
* send button disabled
* helper text: “Live backend reasoning is not connected in this preview.”

Alternative:

* allow typing
* show only local preview response
* clearly label frontend-only behavior

Do not:

* silently accept input and do nothing
* make users think live AI is responding
* create fake backend delay
* call model APIs

---

## Trace Panel Design Rules

The trace panel is the most important differentiator.

It must be:

* visible on desktop
* readable
* structured
* calm
* clear
* not too dense

Trace panel sections:

* Intent
* Evidence Considered
* Risk Indicators
* Information Gaps
* Routing Assessment
* Recommended Action
* Human Review Gate
* Confidence Status
* Preview Status

Design rules:

* Use section labels.
* Use short list items.
* Keep each item readable.
* Avoid fake numeric scores.
* Do not create clinical severity colors that imply real evaluation.
* Use “Preview only” where needed.

Mobile:

* Trace panel should become an accordion or stacked section.
* Do not remove it.

---

## Domain Card Design Rules

Domain cards should show roadmap without overclaiming.

Medical Intake card:

* visually emphasized
* status: Active Preview
* CTA: Open Medical Demo

Other cards:

* visually muted
* status: Coming Soon or Future Layer
* CTA disabled or linked to technical atlas only where appropriate

Avoid:

* making future modules look fully available
* putting too many future domains on first version
* overloading the user with roadmap details

---

## CTA Design Rules

Primary CTA:

Open Medical Demo

Secondary CTA:

Explore Technical Atlas

Tertiary CTA:

Request Access

Rules:

* Primary CTA must be visually strongest.
* Secondary CTA should be clear but less dominant.
* Request Access can be muted or disabled.
* Do not use “Start Chatting” as primary CTA before backend is connected.

---

## Preview and Alpha Labels

Preview state must be visible but not scary.

Use labels like:

* Frontend Preview
* Private Alpha
* Preview Data Only
* No Backend Connected

Avoid labels like:

* Error
* Disabled System
* Not Working
* Broken
* Offline

The page should feel intentionally staged, not incomplete.

---

## Medical Design Rules

The page can reference Medical as the first product direction.

Allowed language:

* medical intake
* clinical reasoning support
* physician-facing summary
* decision-support
* risk indicators
* information gaps
* human review

Avoid language:

* diagnosis
* AI doctor
* replaces doctor
* emergency triage
* clinically approved
* treatment recommendation
* autonomous medical decision

Visual rules:

* Do not use hospital stock photos.
* Do not use emergency red as a dominant color.
* Do not use medical icons excessively.
* Do not make the page look like a hospital management system.

The medical direction should feel serious, not dramatic.

---

## Animation Rules

Keep animations minimal.

Allowed:

* subtle hover states
* gentle panel transitions
* accordion open/close
* small opacity transitions

Avoid:

* animated AI brain effects
* excessive glowing particles
* fake streaming response
* fake typing effect
* distracting background motion
* spinning loaders suggesting backend activity

---

## Icon Rules

Icons are optional.

Use only if consistent with the existing project style.

Allowed icon concepts:

* chat
* trace
* evidence
* medical intake
* document
* shield / review
* domain capsule
* settings

Avoid:

* cartoon robot icons
* generic chatbot mascot
* hospital emergency icons
* excessive icon density
* icons that make the product feel childish

---

## Responsive Rules

Desktop first, but mobile must not break.

Desktop:

* sidebar visible
* trace panel visible
* chat workspace centered

Tablet:

* sidebar may collapse
* trace panel may move below chat

Mobile:

* compact header
* chat workspace full width
* trace panel as accordion
* domain cards stacked
* CTA buttons stacked or full width

No horizontal scroll.

---

## Accessibility Rules

Minimum requirements:

* text must be readable
* buttons must have clear labels
* disabled states must be understandable
* contrast must be sufficient
* interactive elements must be keyboard accessible if feasible
* no information should rely only on color

---

## Content Density Rules

The first version should be clean.

Do not overload with every Aerius concept.

Primary visible concepts:

* Cognitive Workspace
* Medical First
* Traceable Reasoning
* Evidence
* Risk
* Human Review
* Preview State

Avoid putting too many architecture terms on the first screen.

Terms like COMS, PbR, CEA, DCR, COR, RCC, KEL should not dominate the user-facing page unless used in technical atlas links or future advanced sections.

---

## Brand Differentiation Rules

The interface should differentiate Aerius from generic chatbots through structure, not hype.

Do this:

* show trace panel
* show evidence considered
* show information gaps
* show human review gate
* show medical-first roadmap
* show preview honesty

Do not rely only on claims like:

* smarter AI
* next generation AI
* super AI
* revolutionary chatbot

---

## Visual Acceptance Criteria

The design is acceptable when:

* The page does not look empty.
* The page looks like a serious AI product shell.
* It is clear that Aerius is Medical-first.
* It is clear that the page is a frontend preview.
* The layout feels like a workspace, not a marketing-only landing page.
* The trace panel is visible and useful.
* The interface is calm, readable, and premium.
* The page does not look like a generic chatbot SaaS.
* The page does not overclaim medical capability.
* The CTA clearly points to the Medical Demo.

---

## Final Design Principle

Aerius.to should feel like the front door of a serious cognitive AI platform.

It should not pretend to be finished.

It should make the product direction obvious:

Medical first.

Traceable reasoning always.

Broader high-stakes domains later.
