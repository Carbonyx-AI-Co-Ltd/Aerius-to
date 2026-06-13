# 03_COMPONENT_SPEC.md

# Aerius.to Component Specification

## Purpose

This document defines the frontend components for the `Aerius.to` product shell.

The page should be implemented as a frontend-only preview of the future Aerius Cognitive Workspace.

No backend connection is required.

No model API should be called.

No authentication, database, subscription, or payment system should be added.

---

## Component Overview

Required components:

1. AppShell
2. PreviewBanner
3. Sidebar
4. SidebarNavItem
5. ChatWorkspace
6. ChatHero
7. MockChatThread
8. ChatInputBar
9. TracePanel
10. TraceSection
11. DomainCaseCards
12. DomainCaseCard
13. CTAButtons
14. MedicalFirstSection
15. TechnicalAtlasSection
16. Footer

Optional components:

17. MobileTraceAccordion
18. StatusBadge
19. PreviewNotice
20. DisabledModuleState

---

## 1. AppShell

### Purpose

Overall layout wrapper for the Aerius.to page.

### Responsibilities

* Create the full-page workspace layout.
* Include the PreviewBanner.
* Arrange Sidebar, ChatWorkspace, and TracePanel.
* Handle desktop and mobile layout behavior.
* Keep the page visually coherent and product-like.

### Layout

Desktop:

* Top preview banner
* Left sidebar
* Center chat workspace
* Right trace panel

Mobile:

* Top preview banner
* Compact header
* Main chat workspace
* Trace accordion
* CTA section

### Rules

* Must not look like a generic marketing landing page.
* Must feel like a working AI workspace.
* Must clearly show preview/private alpha state.

---

## 2. PreviewBanner

### Purpose

Tell users that this is a preview interface.

### Content

Recommended copy:

Aerius Workspace Preview — Medical is the first product direction. This interface currently uses preview data only.

Short copy:

Frontend Preview · Medical-first product direction · No live backend connected

### Behavior

* Always visible in first version.
* Should not look like an error.
* Should feel like an alpha/product status indicator.

### Props

```ts
type PreviewBannerProps = {
  message: string;
  variant?: "default" | "compact";
};
```

---

## 3. Sidebar

### Purpose

Show product navigation and future platform direction.

### Sections

* Brand area
* Primary navigation
* Future modules
* Footer status

### Brand Area

Content:

Aerius
Cognitive Workspace
Private Alpha

### Navigation Items

* New Chat
* Medical Intake
* Education Tutor
* Business Assistant
* Domain Capsules
* Trace Library
* Settings

### Rules

* Medical Intake should be active or visually emphasized.
* Education Tutor, Business Assistant, Domain Capsules, and Settings should not imply live functionality.
* Use status badges such as Active Preview, Coming Soon, Future Layer, Disabled.

### Props

```ts
type SidebarProps = {
  activeItem: string;
  onSelectItem?: (itemId: string) => void;
};
```

---

## 4. SidebarNavItem

### Purpose

Reusable sidebar item.

### Props

```ts
type SidebarNavItemProps = {
  id: string;
  label: string;
  status?: "Active Preview" | "Coming Soon" | "Future Layer" | "Preview" | "Disabled";
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};
```

### Behavior

* Active item should be visually clear.
* Disabled items should be non-interactive or lightly interactive with preview message.
* Coming Soon items should not trigger backend calls.

---

## 5. ChatWorkspace

### Purpose

Main center area of the product shell.

### Includes

* ChatHero
* MockChatThread
* ChatInputBar
* DomainCaseCards
* CTAButtons

### Responsibilities

* Present Aerius as the future user-facing workspace.
* Show a mock medical case.
* Make the page feel alive without backend.
* Direct users to Medical Demo.

### Rules

* Use local mock data only.
* Do not connect to backend.
* Do not store messages.
* Do not call model APIs.

---

## 6. ChatHero

### Purpose

Present primary positioning.

### Content

Title:

Aerius Cognitive Workspace

Subtitle:

A traceable AI interface for domain-aware reasoning, evidence handling, and accountable decision support.

Supporting line:

Built first for Medical. Designed for high-stakes domains where AI must be explainable, traceable, and accountable.

### Props

```ts
type ChatHeroProps = {
  title: string;
  subtitle: string;
  supportingLine?: string;
};
```

---

## 7. MockChatThread

### Purpose

Show a local-only mock conversation.

### Default Messages

User:

Patient reports chest tightness, age 58, known hypertension, and current appointment scheduled.

Aerius:

I will structure the intake, identify risk indicators, highlight missing information, and prepare a physician-facing summary.

Aerius optional second message:

This preview shows how Aerius separates intent, evidence, risk, information gaps, and routing before a clinician reviews the case.

### Props

```ts
type ChatMessage = {
  id: string;
  role: "user" | "aerius" | "system";
  content: string;
  meta?: string;
};

type MockChatThreadProps = {
  messages: ChatMessage[];
};
```

### Rules

* Must be hardcoded or imported from local mock data.
* Must not use real patient data.
* Must not imply real clinical output.

---

## 8. ChatInputBar

### Purpose

Show the future interaction model while keeping preview behavior honest.

### Placeholder

Ask Aerius to reason with trace, memory, and domain context...

### Recommended Behavior

Option B:
Input accepts typing but send button is disabled.

Option C:
Input accepts typing and shows a local-only preview message.

Recommended first implementation:
Option B.

### Disabled Message

Live backend reasoning is not connected in this preview.

### Props

```ts
type ChatInputBarProps = {
  placeholder: string;
  disabled?: boolean;
  disabledReason?: string;
  onSubmit?: (value: string) => void;
};
```

### Rules

* Do not call backend.
* Do not call model APIs.
* Do not create chat persistence.
* If simulated, clearly state that it is local preview only.

---

## 9. TracePanel

### Purpose

Main differentiator from generic chatbots.

Shows structured reasoning metadata.

### Sections

* Intent
* Evidence Considered
* Risk Indicators
* Information Gaps
* Routing Assessment
* Recommended Action
* Human Review Gate
* Confidence Status
* Preview Status

### Default Title

Reasoning Trace Preview

### Subtitle

A structured preview of how Aerius separates intent, evidence, risk, gaps, routing, and recommended action.

### Props

```ts
type TracePanelProps = {
  title: string;
  subtitle?: string;
  trace: TracePreview;
};

type TracePreview = {
  intent: string;
  evidenceConsidered: string[];
  riskIndicators: string[];
  informationGaps: string[];
  routingAssessment: string;
  recommendedAction: string;
  humanReviewGate: string;
  confidenceStatus: string;
  previewStatus: string;
};
```

### Rules

* Must be visible on desktop.
* On mobile, move into accordion or below chat.
* Must use local mock data only.
* Must not display fake scores as if computed live.

---

## 10. TraceSection

### Purpose

Reusable section inside TracePanel.

### Props

```ts
type TraceSectionProps = {
  label: string;
  value?: string;
  items?: string[];
};
```

### Behavior

* Display list if items exist.
* Display text if value exists.
* Empty values should show “Preview data unavailable” or be hidden.

---

## 11. DomainCaseCards

### Purpose

Show Medical as first product direction and future domain expansion.

### Cards

* Medical Intake
* Education Tutor
* Business Assistant
* Domain Capsules

### Props

```ts
type DomainCaseCardsProps = {
  cards: DomainCaseCardData[];
  activeCardId?: string;
};
```

---

## 12. DomainCaseCard

### Purpose

Represent one domain module.

### Props

```ts
type DomainCaseCardData = {
  id: string;
  title: string;
  status: "Active Preview" | "Coming Soon" | "Future Layer";
  description: string;
  ctaLabel?: string;
  href?: string;
  disabled?: boolean;
};
```

### Default Cards

Medical Intake:

* Status: Active Preview
* CTA: Open Medical Demo
* Link: https://demo.aerius.to

Education Tutor:

* Status: Coming Soon
* CTA: Coming Soon
* Disabled

Business Assistant:

* Status: Coming Soon
* CTA: Coming Soon
* Disabled

Domain Capsules:

* Status: Future Layer
* CTA: Explore Technical Atlas
* Link: https://carbonyx.tech

### Rules

* Medical Intake should be visually emphasized.
* Future modules should not look fully available.
* Domain Capsules can link to technical atlas if appropriate.

---

## 13. CTAButtons

### Purpose

Primary user actions.

### Buttons

Primary:
Open Medical Demo

Secondary:
Explore Technical Atlas

Tertiary:
Request Access

### Props

```ts
type CTAButtonsProps = {
  primaryHref: string;
  secondaryHref: string;
  requestAccessHref?: string;
  requestAccessDisabled?: boolean;
};
```

### Links

Open Medical Demo:
https://demo.aerius.to

Explore Technical Atlas:
https://carbonyx.tech

Request Access:
Disabled, placeholder, or mail/contact link depending on current project setup.

### Rules

* Do not use “Start Chatting” as the primary CTA while backend is not connected.
* Primary CTA must point to Medical Demo.

---

## 14. MedicalFirstSection

### Purpose

Clarify the product roadmap.

### Heading

Medical First

### Body

Aerius is being developed first for medical intake and clinical reasoning support. The goal is to help structure information, identify risk indicators, surface missing details, and prepare physician-facing summaries with traceable reasoning support.

### CTA

Open Medical Demo

### Rules

* Must not claim diagnosis.
* Must not claim clinical approval.
* Must use decision-support language.

---

## 15. TechnicalAtlasSection

### Purpose

Link product shell to technical foundation.

### Heading

Explore the Technical Atlas

### Body

For the deeper architecture behind Aerius, explore the Carbonyx Technical Atlas.

### CTA

Explore Technical Atlas

### Link

https://carbonyx.tech

---

## 16. Footer

### Purpose

Minimal serious footer.

### Content

Aerius
Cognitive AI Workspace
Frontend Preview
Medical-first roadmap

Links:

* Medical Demo
* Technical Atlas
* Carbonyx AI

### Footer Note

Aerius is currently in preview. The first product direction is medical intake and clinical reasoning support.

---

## 17. MobileTraceAccordion

### Purpose

Mobile replacement for right-side TracePanel.

### Behavior

* Collapsed by default or open by default depending on layout.
* Label: Reasoning Trace Preview
* Contains same trace data as desktop TracePanel.

### Rule

Do not hide trace completely on mobile.

---

## 18. StatusBadge

### Purpose

Reusable status labels.

### Allowed Labels

Frontend Preview
Private Alpha
Preview Data Only
No Backend Connected
Medical First
Coming Soon
Future Layer
Active Preview
Human Review Required
Trace Preview

### Props

```ts
type StatusBadgeProps = {
  label: string;
  variant?: "default" | "active" | "warning" | "muted";
};
```

---

## 19. PreviewNotice

### Purpose

Reusable small notice block.

### Example Copy

This is a frontend-only preview. Live reasoning is not connected yet.

### Use Cases

* Under input bar
* Inside chat thread
* In trace panel footer
* In sidebar footer

---

## 20. DisabledModuleState

### Purpose

Show safe placeholder for future modules.

### Example Copy

This module is part of the future Aerius workspace direction and is not active in this preview.

### Rules

* Do not fake interactions.
* Do not create backend calls.
* Do not imply availability.

---

## Suggested Mock Data File

Create a local mock data file if useful:

```txt
src/data/aeriusPreviewData.ts
```

Suggested exports:

```ts
export const previewChatMessages = [
  {
    id: "msg-1",
    role: "user",
    content:
      "Patient reports chest tightness, age 58, known hypertension, and current appointment scheduled.",
  },
  {
    id: "msg-2",
    role: "aerius",
    content:
      "I will structure the intake, identify risk indicators, highlight missing information, and prepare a physician-facing summary.",
  },
  {
    id: "msg-3",
    role: "aerius",
    content:
      "This preview shows how Aerius separates intent, evidence, risk, information gaps, and routing before a clinician reviews the case.",
    meta: "Preview data only",
  },
];

export const previewTrace = {
  intent: "Medical intake support",
  evidenceConsidered: [
    "Patient age",
    "Chest discomfort",
    "Hypertension history",
    "Appointment context",
  ],
  riskIndicators: [
    "Age over 50",
    "Chest discomfort",
    "Cardiovascular risk context",
  ],
  informationGaps: [
    "Allergy confirmation",
    "Current medication confirmation",
    "Symptom onset and duration",
    "Pain radiation and severity",
  ],
  routingAssessment: "Physician review recommended",
  recommendedAction: "Prepare physician-facing intake summary",
  humanReviewGate: "Required for medical decision support",
  confidenceStatus: "Preview only — no live reasoning score",
  previewStatus: "Local mock data only",
};

export const domainCards = [
  {
    id: "medical-intake",
    title: "Medical Intake",
    status: "Active Preview",
    description:
      "Structure patient intake, identify risk indicators, surface missing information, and prepare physician-facing summaries.",
    ctaLabel: "Open Medical Demo",
    href: "https://demo.aerius.to",
  },
  {
    id: "education-tutor",
    title: "Education Tutor",
    status: "Coming Soon",
    description:
      "Future domain workspace for guided learning, reasoning trace, adaptive explanation, and student-specific context.",
    ctaLabel: "Coming Soon",
    disabled: true,
  },
  {
    id: "business-assistant",
    title: "Business Assistant",
    status: "Coming Soon",
    description:
      "Future workspace for structured business reasoning, document handling, workflow support, and auditable recommendations.",
    ctaLabel: "Coming Soon",
    disabled: true,
  },
  {
    id: "domain-capsules",
    title: "Domain Capsules",
    status: "Future Layer",
    description:
      "Future mechanism for binding domain-specific knowledge and reasoning protocols into the Aerius runtime.",
    ctaLabel: "Explore Technical Atlas",
    href: "https://carbonyx.tech",
  },
];
```

---

## Implementation Rules

Hard rules:

* Do not connect backend.
* Do not call model APIs.
* Do not add auth.
* Do not add database.
* Do not add payment/subscription UI.
* Do not use real patient data.
* Do not claim clinical approval.
* Do not position Aerius as a generic chatbot SaaS.
* Do not remove Medical-first positioning.

Allowed:

* Local mock data.
* Static trace preview.
* Disabled input.
* Simulated local-only preview behavior.
* CTA links.
* Product shell UI.
* Responsive layout.

---

## Acceptance Criteria

Implementation is acceptable when:

* The page feels like a real AI workspace.
* Medical Intake is clearly the first product direction.
* The right-side TracePanel is visible and useful.
* The interface clearly says it is a preview.
* No backend or model API is called.
* The page links to the Medical Demo.
* The page links to the Technical Atlas.
* The product is not positioned as a generic SaaS chatbot.
