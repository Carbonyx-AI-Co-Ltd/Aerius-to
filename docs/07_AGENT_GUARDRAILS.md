# 07_AGENT_GUARDRAILS.md

# Aerius.to Agent Guardrails

## Purpose

This document defines hard rules for any coding agent working on the `Aerius.to` frontend product shell.

The purpose is to prevent implementation drift.

The agent must not turn this page into a generic chatbot SaaS, fake live AI system, medical diagnosis tool, backend-connected app, authentication system, or subscription product.

The current task is frontend-only.

---

## Core Rule

Build only the frontend product shell for the future Aerius Cognitive Workspace.

Do not build backend functionality.

Do not connect any AI model.

Do not create real chat behavior.

Do not create medical decision-making logic.

Do not create SaaS subscription logic.

---

## Product Positioning Guardrail

Aerius.to must be positioned as:

```txt id="vrtcd9"
A cognitive AI workspace for traceable, domain-aware reasoning in high-stakes environments.
```

It must not be positioned as:

```txt id="61e7dm"
A generic chatbot SaaS
A customer support chatbot builder
A no-code chatbot platform
A general chat app
An AI doctor
A clinical diagnosis product
A production medical AI system
```

---

## Medical-First Guardrail

The first product direction is Medical.

The page must clearly communicate:

```txt id="w5urvf"
Medical first. Broader cognitive workspace next.
```

Allowed Medical positioning:

* medical intake support
* clinical reasoning support
* physician-facing summaries
* decision-support
* risk indicators
* information gaps
* human review gate

Forbidden Medical positioning:

* diagnosis
* treatment recommendation
* AI doctor
* replaces doctor
* emergency triage
* clinically approved
* autonomous clinical decision-making
* guaranteed clinical accuracy

---

## Backend Guardrails

Strictly forbidden:

* adding backend calls
* adding API routes
* adding server actions for chat
* adding OpenAI API calls
* adding Anthropic API calls
* adding Gemini API calls
* adding model SDKs
* adding vector database calls
* adding database writes
* adding message persistence
* adding user accounts
* adding authentication
* adding payment or subscription logic
* adding telemetry that sends chat text externally

Allowed:

* local mock data
* static components
* disabled input
* local-only simulated preview if clearly labeled
* static CTA links
* static trace panel

---

## Data Guardrails

Use only fictional local mock data.

Strictly forbidden:

* real patient data
* real medical records
* real clinical output
* real user message storage
* generated diagnosis
* generated treatment advice
* real triage scoring
* fake clinical score presented as computed
* fake confidence score presented as live reasoning

Required labels:

* Preview data only
* No backend connected
* Frontend Preview
* Private Alpha

---

## Chat Behavior Guardrails

The chat UI is allowed to look like a future chat workspace.

But it must not behave like a real AI assistant.

Allowed:

* static mock conversation
* disabled input
* input that accepts typing but does not submit
* local-only preview response with clear disclaimer

Forbidden:

* real AI response
* fake streaming response
* fake typing indicator
* fake loading delay
* fake “thinking” state
* saving messages
* sending messages to API
* hidden network calls
* claiming live reasoning is active

If the input is interactive, show this message:

```txt id="px78dh"
This is a frontend-only preview. Live reasoning is not connected yet.
```

---

## Trace Panel Guardrails

The trace panel is required.

It must show structured preview fields:

* Intent
* Evidence Considered
* Risk Indicators
* Information Gaps
* Routing Assessment
* Recommended Action
* Human Review Gate
* Confidence Status
* Preview Status

Forbidden:

* fake live trace generation
* fake numeric confidence score
* fake clinical severity score
* hidden medical logic
* diagnosis conclusion
* treatment recommendation

Allowed:

* static preview trace
* local mock data
* physician review recommended
* human review required
* preview-only confidence label

Required confidence wording:

```txt id="vnr1yg"
Preview only — no live reasoning score
```

---

## CTA Guardrails

Primary CTA must be:

```txt id="9gr80l"
Open Medical Demo
```

Primary CTA must link to:

```txt id="9vf89v"
https://demo.aerius.to
```

Secondary CTA must be:

```txt id="hbtqfb"
Explore Technical Atlas
```

Secondary CTA must link to:

```txt id="zpoctx"
https://carbonyx.tech
```

Do not use this as the primary CTA:

```txt id="9y7k1u"
Start Chatting
```

Do not create:

* signup flow
* login flow
* subscription flow
* payment page
* workspace account creation

---

## Sidebar Guardrails

Sidebar must show Medical Intake as active or emphasized.

Future modules must be marked clearly.

Allowed future labels:

* Coming Soon
* Future Layer
* Preview
* Disabled

Forbidden:

* making all modules look live
* enabling fake navigation to full product pages
* building unfinished routes that imply availability
* creating settings/account pages

---

## Design Guardrails

The design must feel:

* calm
* premium
* technical
* serious
* medical-aware
* workspace-like

Avoid:

* generic chatbot SaaS template
* cartoon robot
* childish icons
* loud gradients
* hospital stock imagery
* emergency-style red UI
* fake medical dashboard
* excessive animation
* crypto dashboard style
* aggressive sales landing page

The UI should look like:

```txt id="wvbil8"
A serious cognitive AI workspace preview.
```

Not like:

```txt id="bnn3n9"
A chatbot template.
```

---

## Copy Guardrails

Approved phrases:

* Aerius Cognitive Workspace
* traceable reasoning
* domain-aware reasoning
* evidence handling
* decision-support
* physician-facing summary
* medical intake support
* risk indicators
* information gaps
* human review
* frontend preview
* private alpha
* preview data only
* no live backend connected

Forbidden phrases:

* AI doctor
* diagnosis
* treatment recommendation
* clinical approval
* guaranteed accuracy
* fully autonomous medical AI
* replace doctor
* build your chatbot
* automate customer support
* chatbot SaaS
* start chatting now

---

## Technical Scope Guardrail

The implementation scope is limited to:

* page route
* frontend components
* local mock data
* styling
* responsive layout
* static links
* disabled/local-only input behavior

Do not modify:

* backend services
* API routes
* database schema
* auth system
* deployment config unless required for static frontend
* unrelated pages
* unrelated components
* environment variables
* package dependencies unless absolutely necessary

If a package is not needed, do not add it.

---

## Dependency Guardrail

Do not add new dependencies unless the project already uses them or the task is impossible without them.

Prefer:

* existing CSS system
* existing component patterns
* existing icons if available
* plain React/Next components
* local data

Avoid adding:

* AI SDKs
* auth SDKs
* payment SDKs
* analytics SDKs
* state management libraries
* animation libraries
* UI kits that change the design language

---

## Accessibility Guardrail

Minimum requirements:

* readable contrast
* clear button labels
* disabled states must be understandable
* no important information by color only
* links must be identifiable
* mobile layout must not overflow horizontally

---

## Responsive Guardrail

Desktop:

* sidebar visible
* chat workspace visible
* trace panel visible

Tablet:

* trace panel may move below chat
* sidebar may collapse

Mobile:

* compact header
* chat workspace full width
* trace panel stacked or accordion
* CTA buttons stacked
* domain cards stacked

Forbidden:

* hiding trace completely on mobile
* horizontal scroll
* unusable tiny trace text
* clipped CTA buttons

---

## Build Guardrail

After implementation, run available project checks.

Common commands:

```txt id="bijz2g"
npm run lint
npm run typecheck
npm run build
```

If these scripts do not exist, run the project’s available equivalent.

Fix only issues caused by this implementation.

Do not perform broad unrelated refactors.

---

## Final Self-Check

Before finishing, verify:

* Is Medical clearly the first product direction?
* Is this clearly a frontend preview?
* Is there no backend call?
* Is there no model API call?
* Is the trace panel visible?
* Is the Medical Demo CTA obvious?
* Is the Technical Atlas CTA present?
* Are future modules marked as coming soon/future layer?
* Is Aerius not described as a generic chatbot SaaS?
* Are there no medical overclaims?
* Does the page feel like a serious product shell?

---

## Non-Negotiable Final Rule

Do not make Aerius.to pretend to be more live than it is.

The page should feel credible because it is honest, structured, and strategically clear.

Frontend preview only.

Medical first.

Traceable reasoning always.
