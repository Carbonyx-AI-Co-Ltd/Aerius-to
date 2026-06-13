# 01_PAGE_STRUCTURE.md

# Aerius.to Page Structure

## Purpose

This document defines the frontend structure for `Aerius.to`.

The page should look and feel like a real AI workspace, similar in familiarity to ChatGPT, Gemini, Claude, or other modern AI assistants, but with Aerius-specific positioning.

The main purpose is to create a serious product shell for the future Aerius Cognitive Workspace, while clearly directing users to the current Medical Demo.

No backend connection is required at this stage.

---

## Page Type

`Aerius.to` should be implemented as a product interface page, not a traditional marketing landing page.

The first screen should feel like an actual workspace.

Recommended structure:

* Left Sidebar
* Main Chat Workspace
* Right Reasoning Trace Panel
* Preview/Alpha Status Banner
* CTA links to Medical Demo and Technical Atlas

---

## Overall Layout

Desktop layout:

```txt
+--------------------------------------------------------------------------------+
| Top Preview Banner / Alpha Notice                                               |
+----------------------+--------------------------------------+------------------+
| Left Sidebar         | Main Chat Workspace                  | Trace Panel      |
|                      |                                      |                  |
| Navigation           | Hero / Mock Chat                     | Intent           |
| Domain Modules       | Input Bar                            | Evidence         |
| Status               | Case Cards                           | Risk             |
|                      |                                      | Route            |
|                      |                                      | Recommended      |
|                      |                                      | Action           |
+----------------------+--------------------------------------+------------------+
```

Mobile layout:

```txt
+----------------------------------+
| Top Preview Banner               |
+----------------------------------+
| Header / Compact Navigation      |
+----------------------------------+
| Main Chat Workspace              |
+----------------------------------+
| Trace Preview Accordion          |
+----------------------------------+
| CTA Buttons                      |
+----------------------------------+
```

---

## Top Preview Banner

Purpose:
Clearly communicate that this is a preview interface and not a fully live backend-connected chatbot.

Placement:
Top of the page, above the main app shell.

Suggested copy:

Aerius Workspace Preview — Medical is the first product direction. This interface currently uses preview data only.

Alternative short copy:

Frontend Preview · Medical-first product direction · No live backend connected

Behavior:

* Always visible on first version.
* Should not feel like an error warning.
* Should feel like a controlled alpha/product preview label.

---

## Left Sidebar

Purpose:
Make the page feel like a real AI workspace and show the broader future platform direction.

Sections:

### Brand Area

Content:

* Aerius wordmark or text logo
* Small label: Cognitive Workspace
* Status: Private Alpha

Example:

Aerius
Cognitive Workspace
Private Alpha

---

### Primary Navigation

Items:

* New Chat
* Medical Intake
* Education Tutor
* Business Assistant
* Domain Capsules
* Trace Library
* Settings

Important:
Only Medical Intake should look active or emphasized.

Other items should appear as future modules or disabled preview items.

Recommended labels:

* Medical Intake — Active Preview
* Education Tutor — Coming Soon
* Business Assistant — Coming Soon
* Domain Capsules — Future Layer
* Trace Library — Preview
* Settings — Disabled

---

### Sidebar Footer

Content:

* Frontend Preview
* No backend connected
* Version label, for example: v0.1 shell

Optional:

* Link to Technical Atlas
* Link to Medical Demo

---

## Main Chat Workspace

Purpose:
Show the Aerius interface as the future user-facing product experience.

The main area should include:

1. Hero state
2. Mock chat sample
3. Input bar
4. Domain case cards
5. Main CTA row

---

## Main Workspace Hero

Placement:
Centered or upper-middle of main chat area.

Hero title:

Aerius Cognitive Workspace

Hero subtitle:

A traceable AI interface for domain-aware reasoning, evidence handling, and accountable decision support.

Supporting line:

Built first for Medical. Designed for high-stakes domains where AI must be explainable, traceable, and accountable.

Visual treatment:

* Clean
* Minimal
* Premium
* No heavy marketing graphics
* No hospital stock imagery

---

## Main CTA Row

Placement:
Under the hero or near bottom of main workspace.

Buttons:

Primary:
Open Medical Demo

Secondary:
Explore Technical Atlas

Muted / tertiary:
Request Access

Button behavior:

* Open Medical Demo → https://demo.aerius.to
* Explore Technical Atlas → https://carbonyx.tech
* Request Access → disabled, placeholder, or mail/contact link depending on current project setup

Important:
Do not use “Start Chatting” as the primary CTA until backend is connected.

---

## Mock Chat Area

Purpose:
Make the interface feel real without connecting backend.

The chat area should show one short mock interaction.

Example user message:

Patient reports chest tightness, age 58, known hypertension, and current appointment scheduled.

Example Aerius response:

I will structure the intake, identify risk indicators, highlight missing information, and prepare a physician-facing summary.

Optional second Aerius line:

This preview shows how Aerius can separate intent, evidence, risk, information gaps, and routing before a clinician reviews the case.

Rules:

* Use local hardcoded data only.
* Do not call any backend.
* Do not call any model API.
* Do not store messages.
* Do not imply clinical approval.

---

## Input Bar

Purpose:
Show the future interaction model while keeping current behavior honest.

Placeholder:

Ask Aerius to reason with trace, memory, and domain context...

Behavior options:

Option A:
Input disabled with label:
Backend not connected in this preview.

Option B:
Input accepts typing but send button is disabled.

Option C:
Input accepts typing and shows local-only simulated preview message.

Recommended for first version:
Option B or C.

If using Option C, the response must clearly say:

This is a frontend-only preview. Live reasoning is not connected yet.

---

## Domain Case Cards

Purpose:
Show future workspace direction without claiming all modules are live.

Cards:

### Medical Intake

Status:
Active Preview

Description:
Structure patient intake, identify risk indicators, surface missing information, and prepare physician-facing summaries.

CTA:
Open Medical Demo

### Education Tutor

Status:
Coming Soon

Description:
Future domain workspace for guided learning, reasoning trace, and adaptive explanation.

CTA:
Preview only / Coming Soon

### Business Assistant

Status:
Coming Soon

Description:
Future workspace for structured business reasoning, document handling, workflow support, and auditable recommendations.

CTA:
Preview only / Coming Soon

### Domain Capsules

Status:
Future Layer

Description:
Future mechanism for binding domain-specific knowledge and reasoning protocols into Aerius runtime.

CTA:
Explore Technical Atlas

---

## Right Reasoning Trace Panel

Purpose:
Show what makes Aerius different from generic chatbots.

The panel should show structured reasoning metadata from mock data.

Panel title:

Reasoning Trace Preview

Sections:

1. Intent
2. Evidence Considered
3. Risk Indicators
4. Information Gaps
5. Routing Assessment
6. Recommended Action
7. Status

Example content:

Intent:
Medical intake support

Evidence Considered:

* Patient age
* Chest discomfort
* Hypertension history
* Appointment context

Risk Indicators:

* Age over 50
* Chest discomfort
* Cardiovascular risk context

Information Gaps:

* Allergy confirmation
* Current medication confirmation
* Symptom onset and duration
* Pain radiation and severity

Routing Assessment:
Physician review recommended

Recommended Action:
Prepare physician-facing intake summary

Status:
Preview data only

---

## Right Panel Behavior

Desktop:

* Always visible on the right side.
* Sticky or fixed within viewport if layout allows.

Tablet:

* Can move below main chat area.

Mobile:

* Collapse into an accordion labeled “Reasoning Trace Preview”.

Do not hide it completely, because this panel is the main differentiator of Aerius.

---

## Medical-First Section

Purpose:
Clarify roadmap.

Placement:
Below the main workspace or as a card inside the main page.

Suggested heading:

Medical First

Suggested copy:

Aerius is being developed first for medical intake and clinical reasoning support. The broader workspace interface represents the future platform direction for domains where AI must reason with evidence, risk, trace, and human review.

CTA:
Open Medical Demo

---

## Technical Atlas Section

Purpose:
Connect the product shell to the deeper technical explanation.

Placement:
Below Medical First section or footer.

Suggested heading:

Explore the Technical Atlas

Suggested copy:

For the deeper architecture behind Aerius, explore the Carbonyx Technical Atlas.

CTA:
Explore Technical Atlas

Link:
https://carbonyx.tech

---

## Footer

Purpose:
Keep footer minimal and serious.

Content:

* Aerius
* Cognitive AI Workspace
* Frontend Preview
* Medical-first roadmap
* Links:

  * Medical Demo
  * Technical Atlas
  * Carbonyx AI

Suggested footer copy:

Aerius is currently in preview. The first product direction is medical intake and clinical reasoning support.

---

## Required Page States

### Default State

Shows:

* Preview banner
* Sidebar
* Hero
* Mock chat
* Trace panel
* CTA buttons

### Medical Case Selected State

Shows:

* Mock medical conversation
* Trace panel filled with medical data
* Medical Intake highlighted in sidebar
* Open Medical Demo CTA emphasized

### Coming Soon Module Selected State

Shows:

* Coming Soon label
* Short explanation
* No fake interaction
* No backend call

---

## Content Safety and Honesty Rules

Do not claim:

* The system is live.
* The system diagnoses patients.
* The system replaces doctors.
* The system is clinically approved.
* The system is production-ready.
* The system has real-time backend reasoning if it does not.

Allowed wording:

* preview
* private alpha
* frontend shell
* demo
* decision-support
* physician-facing summary
* trace preview
* medical intake support
* future workspace

---

## Acceptance Criteria

The page is acceptable when:

* It does not look empty.
* It clearly presents Aerius as a serious cognitive AI workspace.
* It does not position Aerius as a generic chatbot SaaS.
* It clearly states that Medical is the first product direction.
* It links users to `demo.aerius.to`.
* It links users to `carbonyx.tech`.
* It uses local mock data only.
* It does not call backend or model APIs.
* It includes a visible reasoning trace preview.
* It is clear that the current page is a frontend preview/private alpha.
