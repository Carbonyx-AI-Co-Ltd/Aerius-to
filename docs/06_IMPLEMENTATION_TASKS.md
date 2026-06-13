# 06_IMPLEMENTATION_TASKS.md

# Aerius.to Implementation Tasks

## Purpose

This document defines the implementation tasks for building the `Aerius.to` frontend product shell.

The goal is to create a polished frontend-only preview of the future Aerius Cognitive Workspace.

The page must not connect to backend, model APIs, authentication, database, payment, or subscription systems.

The current implementation should make the main `Aerius.to` domain feel alive, credible, and strategically aligned with the Medical-first roadmap.

---

## Implementation Goal

Build a product interface page for:

Aerius Cognitive Workspace

The page should look like a real AI workspace with:

* left sidebar
* main chat workspace
* mock medical chat
* right reasoning trace panel
* preview/private alpha status
* CTA to Medical Demo
* CTA to Technical Atlas
* local mock data only

---

## Required Output

The implementation must produce a working frontend page that:

* does not look empty
* feels like a serious AI product shell
* clearly positions Aerius as Medical-first
* shows the broader future cognitive workspace direction
* includes mock chat and mock reasoning trace
* clearly states that the interface is a frontend preview
* links to `https://demo.aerius.to`
* links to `https://carbonyx.tech`
* does not call any backend or model API

---

## Task 1 — Locate Current App Structure

Inspect the current frontend project structure.

Identify:

* routing system
* app/page entry point
* existing layout components
* existing style system
* existing brand colors or tokens
* existing deployment target if relevant

Do not rewrite the entire app unless necessary.

Prefer adding a clean page implementation within the existing project structure.

---

## Task 2 — Create Aerius.to Main Route

Create or update the main route for `Aerius.to`.

Possible locations depending on the framework:

```txt id="yb44f1"
app/page.tsx
pages/index.tsx
src/app/page.tsx
src/pages/index.tsx
```

Use the route that matches the existing project.

The route should render the Aerius Cognitive Workspace shell.

---

## Task 3 — Add Local Mock Data

Create a local mock data file.

Suggested file:

```txt id="s3ovy4"
src/data/aeriusPreviewData.ts
```

Alternative if the project uses lib:

```txt id="zk6jfm"
src/lib/aerius-preview-data.ts
```

The file should export:

* previewChatMessages
* previewTrace
* physicianSummaryPreview
* domainCards
* sidebarItems

Rules:

* local data only
* no API calls
* no real patient data
* no generated medical advice
* no clinical scoring

Use the data defined in:

```txt id="3m7e65"
04_MOCK_CHAT_AND_TRACE_DATA.md
```

---

## Task 4 — Build AppShell Layout

Create an AppShell component.

Suggested file:

```txt id="kcy2m4"
src/components/aerius/AppShell.tsx
```

Responsibilities:

* render PreviewBanner
* render Sidebar
* render ChatWorkspace
* render TracePanel
* handle desktop layout
* handle mobile stacking
* keep page visually coherent

Desktop structure:

```txt id="77s25r"
PreviewBanner
AppShell
  Sidebar
  ChatWorkspace
  TracePanel
```

Mobile structure:

```txt id="mxtkfc"
PreviewBanner
Compact Header
ChatWorkspace
TracePanel / Accordion
CTA Section
```

---

## Task 5 — Build PreviewBanner

Create PreviewBanner component.

Suggested file:

```txt id="uct59z"
src/components/aerius/PreviewBanner.tsx
```

Copy:

```txt id="ipxqws"
Aerius Workspace Preview — Medical is the first product direction. This interface currently uses preview data only.
```

Alternative compact copy:

```txt id="0r391h"
Frontend Preview · Medical-first product direction · No live backend connected
```

Rules:

* always visible in first version
* should not look like an error
* should feel intentional and controlled

---

## Task 6 — Build Sidebar

Create Sidebar component.

Suggested file:

```txt id="4hnvnq"
src/components/aerius/Sidebar.tsx
```

Include:

* Aerius brand
* Cognitive Workspace label
* Private Alpha label
* navigation items
* module statuses
* footer status

Navigation items:

* New Chat
* Medical Intake
* Education Tutor
* Business Assistant
* Domain Capsules
* Trace Library
* Settings

Rules:

* Medical Intake is active
* Coming Soon modules are muted/disabled
* no backend behavior
* no fake settings page

---

## Task 7 — Build ChatWorkspace

Create ChatWorkspace component.

Suggested file:

```txt id="c5mxmt"
src/components/aerius/ChatWorkspace.tsx
```

Include:

* ChatHero
* MockChatThread
* ChatInputBar
* DomainCaseCards
* CTAButtons

The main workspace should show:

Title:

```txt id="wxt286"
Aerius Cognitive Workspace
```

Subtitle:

```txt id="d5cbcn"
A traceable AI interface for domain-aware reasoning, evidence handling, and accountable decision support.
```

Supporting line:

```txt id="uqyp9l"
Built first for Medical. Designed for high-stakes domains where AI must be explainable, traceable, and accountable.
```

---

## Task 8 — Build MockChatThread

Create MockChatThread component.

Suggested file:

```txt id="ugx8sp"
src/components/aerius/MockChatThread.tsx
```

Use `previewChatMessages` from local mock data.

Rules:

* no backend
* no streaming
* no fake loading
* no real patient data
* show preview meta label if available

---

## Task 9 — Build ChatInputBar

Create ChatInputBar component.

Suggested file:

```txt id="v44flt"
src/components/aerius/ChatInputBar.tsx
```

Placeholder:

```txt id="5tn60b"
Ask Aerius to reason with trace, memory, and domain context...
```

Recommended first version:

* input visible
* send button disabled
* helper text visible

Helper text:

```txt id="zsyvg1"
Live backend reasoning is not connected in this preview.
```

Rules:

* do not submit to backend
* do not call model API
* do not store messages
* do not fake real reasoning

---

## Task 10 — Build TracePanel

Create TracePanel component.

Suggested file:

```txt id="s2i19x"
src/components/aerius/TracePanel.tsx
```

Use `previewTrace` from local mock data.

Panel title:

```txt id="q9ukzl"
Reasoning Trace Preview
```

Panel subtitle:

```txt id="8g0j1p"
A structured preview of how Aerius separates intent, evidence, risk, gaps, routing, and recommended action.
```

Required sections:

* Intent
* Evidence Considered
* Risk Indicators
* Information Gaps
* Routing Assessment
* Recommended Action
* Human Review Gate
* Confidence Status
* Preview Status

Rules:

* visible on desktop
* stacked or accordion on mobile
* no fake numeric scoring
* no real clinical interpretation
* no hidden trace on mobile

---

## Task 11 — Build DomainCaseCards

Create DomainCaseCards component.

Suggested file:

```txt id="scfhpn"
src/components/aerius/DomainCaseCards.tsx
```

Cards:

1. Medical Intake
2. Education Tutor
3. Business Assistant
4. Domain Capsules

Rules:

* Medical Intake visually emphasized
* other cards marked Coming Soon or Future Layer
* Medical links to `https://demo.aerius.to`
* Domain Capsules may link to `https://carbonyx.tech`
* disabled cards should not fake interaction

---

## Task 12 — Build CTAButtons

Create CTAButtons component.

Suggested file:

```txt id="62wu84"
src/components/aerius/CTAButtons.tsx
```

Buttons:

Primary:

```txt id="40wvbz"
Open Medical Demo
```

Link:

```txt id="ao5ao6"
https://demo.aerius.to
```

Secondary:

```txt id="9ykasr"
Explore Technical Atlas
```

Link:

```txt id="57ujzr"
https://carbonyx.tech
```

Tertiary:

```txt id="5qlf2c"
Request Access
```

Behavior:

* disabled, placeholder, or existing contact link only
* do not create auth
* do not create account request backend

---

## Task 13 — Build MedicalFirstSection

Create MedicalFirstSection component.

Suggested file:

```txt id="psgcya"
src/components/aerius/MedicalFirstSection.tsx
```

Heading:

```txt id="ll9lhn"
Medical First
```

Body:

```txt id="pmjcxm"
Aerius is being developed first for medical intake and clinical reasoning support. The goal is to help structure information, identify risk indicators, surface missing details, and prepare physician-facing summaries with traceable reasoning support.
```

CTA:

```txt id="9g2tpa"
Open Medical Demo
```

Rules:

* no diagnosis language
* no clinical approval claim
* no replacement-for-doctor claim

---

## Task 14 — Build TechnicalAtlasSection

Create TechnicalAtlasSection component.

Suggested file:

```txt id="9c227k"
src/components/aerius/TechnicalAtlasSection.tsx
```

Heading:

```txt id="ut5grn"
Explore the Technical Atlas
```

Body:

```txt id="86n979"
For the deeper architecture behind Aerius, explore the Carbonyx Technical Atlas.
```

CTA:

```txt id="h4t59v"
Explore Technical Atlas
```

Link:

```txt id="g7j2jp"
https://carbonyx.tech
```

---

## Task 15 — Build Footer

Create Footer component.

Suggested file:

```txt id="tsjz8l"
src/components/aerius/Footer.tsx
```

Footer content:

```txt id="58vg87"
Aerius
Cognitive AI Workspace
Frontend Preview
Medical-first roadmap
```

Footer note:

```txt id="z9ng26"
Aerius is currently in preview. The first product direction is medical intake and clinical reasoning support.
```

Links:

* Medical Demo
* Technical Atlas
* Carbonyx AI

---

## Task 16 — Apply Design Rules

Use:

```txt id="ay9esa"
05_DESIGN_RULES.md
```

Design direction:

* dark mode first
* premium AI product
* calm technical interface
* soft borders
* readable trace panel
* workspace layout
* not generic SaaS
* not normal marketing page

Avoid:

* loud colors
* fake medical dashboard
* hospital stock imagery
* cartoon AI
* excessive animation
* fake backend loading

---

## Task 17 — Responsive Pass

Desktop:

* sidebar visible
* chat workspace centered
* trace panel visible

Tablet:

* sidebar may collapse
* trace panel may move below chat

Mobile:

* compact header
* chat workspace full width
* trace panel as accordion or stacked block
* cards stacked
* CTA buttons stacked
* no horizontal scroll

Important:

Do not hide the trace panel completely on mobile.

---

## Task 18 — Remove or Avoid Backend Integration

Before finalizing, verify:

* no fetch calls were added
* no API route was added
* no model SDK was added
* no OpenAI/Anthropic/Gemini call exists
* no auth was added
* no database logic was added
* no payment/subscription UI was added

This page must remain frontend-only.

---

## Task 19 — Build and Typecheck

Run the project’s available checks.

Common commands depending on project:

```txt id="1j6r51"
npm run lint
npm run typecheck
npm run build
```

If some commands do not exist, run the available equivalent.

Fix errors only within the scope of this frontend page.

Do not refactor unrelated parts of the app.

---

## Task 20 — Final Visual QA

Check:

* Page does not look empty
* Aerius is not positioned as generic chatbot SaaS
* Medical-first message is clear
* Preview status is visible
* Trace panel is visible
* Medical Demo CTA is obvious
* Technical Atlas CTA exists
* No backend behavior is implied
* No clinical claims are made
* Layout works on desktop and mobile

---

## Final Acceptance Criteria

The implementation is complete when:

* `Aerius.to` renders a polished frontend product shell
* the interface looks like a serious cognitive AI workspace
* the page clearly routes users to `demo.aerius.to`
* the page links to `carbonyx.tech`
* all data is local mock data
* no backend/API/model/auth/payment/database code is added
* Medical is clearly the first product direction
* future domains are shown only as preview/coming soon/future layer
* the page is honest about being a frontend preview
* the page can be deployed safely without creating false product claims
