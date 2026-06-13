# 04_MOCK_CHAT_AND_TRACE_DATA.md

# Aerius.to Mock Chat and Trace Data

## Purpose

This document defines the local mock data for the `Aerius.to` frontend preview.

The purpose of the mock data is to make the Aerius Cognitive Workspace feel alive and product-like without connecting to any backend, model API, database, authentication system, or real clinical system.

All data in this document is fictional preview data.

Do not use real patient data.

Do not imply that the system is performing live clinical reasoning.

---

## Data Rules

Hard rules:

* Use local mock data only.
* Do not call backend.
* Do not call OpenAI, Anthropic, Gemini, or any other model API.
* Do not store user messages.
* Do not create real patient records.
* Do not calculate real medical scores.
* Do not claim diagnosis.
* Do not claim clinical approval.
* Do not present the output as real medical advice.
* Do not create automated medical decision-making behavior.

Allowed:

* Static mock chat.
* Static reasoning trace preview.
* Static risk indicator labels.
* Static information gaps.
* Static routing preview.
* Static “physician review recommended” message.
* Clear preview disclaimers.

---

## Default Mock Scenario

### Scenario Name

Medical Intake Preview

### Scenario Type

Frontend-only medical intake preview

### Scenario Purpose

Show how Aerius can structure a medical intake case into:

* intent
* evidence
* risk indicators
* information gaps
* routing assessment
* recommended action
* human review gate

### Scenario Disclaimer

This is preview data only. It is not live clinical reasoning and must not be treated as medical advice.

---

## Mock User Message

```txt
Patient reports chest tightness, age 58, known hypertension, and current appointment scheduled.
```

---

## Mock Aerius Response

```txt
I will structure the intake, identify risk indicators, highlight missing information, and prepare a physician-facing summary.
```

---

## Optional Second Aerius Response

```txt
This preview shows how Aerius separates intent, evidence, risk, information gaps, and routing before a clinician reviews the case.
```

---

## Preview Disclaimer Message

```txt
Preview data only. This interface is not connected to live backend reasoning.
```

---

## Mock Reasoning Trace

### Intent

```txt
Medical intake support
```

### Evidence Considered

```txt
Patient age
Chest discomfort
Hypertension history
Appointment context
```

### Risk Indicators

```txt
Age over 50
Chest discomfort
Cardiovascular risk context
```

### Information Gaps

```txt
Allergy confirmation
Current medication confirmation
Symptom onset and duration
Pain radiation and severity
Associated symptoms
Recent exertion or stress context
Prior cardiac history confirmation
```

### Routing Assessment

```txt
Physician review recommended
```

### Recommended Action

```txt
Prepare physician-facing intake summary and surface missing information for follow-up.
```

### Human Review Gate

```txt
Required for medical decision support
```

### Confidence Status

```txt
Preview only — no live reasoning score
```

### Preview Status

```txt
Local mock data only
```

---

## Physician-Facing Summary Preview

This optional block may be displayed as a structured preview card.

### Title

```txt
Physician-Facing Intake Summary
```

### Summary

```txt
A 58-year-old patient reports chest tightness with a known history of hypertension and an upcoming appointment. The case should be reviewed by a physician. Additional information is needed regarding symptom onset, duration, severity, radiation, associated symptoms, current medication, and allergy status.
```

### Important Rule

This summary must be labeled as preview data only.

Do not present it as a generated clinical note from a live AI system.

---

## Mock Chat Message Object

Recommended local data shape:

```ts
export type PreviewChatMessage = {
  id: string;
  role: "user" | "aerius" | "system";
  content: string;
  meta?: string;
};
```

Recommended mock data:

```ts
export const previewChatMessages: PreviewChatMessage[] = [
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
```

---

## Mock Trace Object

Recommended local data shape:

```ts
export type PreviewTrace = {
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

Recommended mock data:

```ts
export const previewTrace: PreviewTrace = {
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
    "Associated symptoms",
    "Recent exertion or stress context",
    "Prior cardiac history confirmation",
  ],
  routingAssessment: "Physician review recommended",
  recommendedAction:
    "Prepare physician-facing intake summary and surface missing information for follow-up.",
  humanReviewGate: "Required for medical decision support",
  confidenceStatus: "Preview only — no live reasoning score",
  previewStatus: "Local mock data only",
};
```

---

## Mock Summary Object

Recommended local data shape:

```ts
export type PhysicianSummaryPreview = {
  title: string;
  summary: string;
  disclaimer: string;
};
```

Recommended mock data:

```ts
export const physicianSummaryPreview: PhysicianSummaryPreview = {
  title: "Physician-Facing Intake Summary",
  summary:
    "A 58-year-old patient reports chest tightness with a known history of hypertension and an upcoming appointment. The case should be reviewed by a physician. Additional information is needed regarding symptom onset, duration, severity, radiation, associated symptoms, current medication, and allergy status.",
  disclaimer:
    "Preview data only. This is not live clinical reasoning or medical advice.",
};
```

---

## Domain Cards Mock Data

Recommended local data shape:

```ts
export type DomainCard = {
  id: string;
  title: string;
  status: "Active Preview" | "Coming Soon" | "Future Layer";
  description: string;
  ctaLabel: string;
  href?: string;
  disabled?: boolean;
};
```

Recommended mock data:

```ts
export const domainCards: DomainCard[] = [
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

## Sidebar Navigation Mock Data

Recommended local data shape:

```ts
export type SidebarItem = {
  id: string;
  label: string;
  status: "Active Preview" | "Coming Soon" | "Future Layer" | "Preview" | "Disabled";
  active?: boolean;
  disabled?: boolean;
};
```

Recommended mock data:

```ts
export const sidebarItems: SidebarItem[] = [
  {
    id: "new-chat",
    label: "New Chat",
    status: "Preview",
  },
  {
    id: "medical-intake",
    label: "Medical Intake",
    status: "Active Preview",
    active: true,
  },
  {
    id: "education-tutor",
    label: "Education Tutor",
    status: "Coming Soon",
    disabled: true,
  },
  {
    id: "business-assistant",
    label: "Business Assistant",
    status: "Coming Soon",
    disabled: true,
  },
  {
    id: "domain-capsules",
    label: "Domain Capsules",
    status: "Future Layer",
  },
  {
    id: "trace-library",
    label: "Trace Library",
    status: "Preview",
  },
  {
    id: "settings",
    label: "Settings",
    status: "Disabled",
    disabled: true,
  },
];
```

---

## Preview Status Copy

Use these labels consistently:

```txt
Frontend Preview
Private Alpha
Preview Data Only
No Backend Connected
Medical First
Active Preview
Coming Soon
Future Layer
Human Review Required
Trace Preview
```

---

## Alternative Mock Case For Later

This alternative case can be reserved for a later version. Do not use it unless multiple sample cases are needed.

### Scenario Name

Education Tutor Preview

### Mock User Message

```txt
A student is struggling to understand why fractions need common denominators before addition.
```

### Mock Aerius Response

```txt
I will identify the learning intent, detect the concept gap, and prepare a step-by-step explanation path.
```

### Mock Trace

Intent:
Learning support

Evidence:

* Student confusion
* Fraction addition concept
* Need for explanation path

Information Gaps:

* Student grade level
* Prior knowledge
* Preferred explanation style

Recommended Action:
Prepare adaptive explanation

Status:
Coming Soon preview only

---

## File Placement Suggestion

Suggested file:

```txt
src/data/aeriusPreviewData.ts
```

Alternative:

```txt
src/lib/aerius-preview-data.ts
```

---

## Acceptance Criteria

The mock data is acceptable when:

* It is fully local.
* It does not use real patient data.
* It does not call backend.
* It does not call model APIs.
* It clearly labels the interface as preview-only.
* It supports the chat area.
* It supports the trace panel.
* It supports domain cards.
* It reinforces Medical as the first product direction.
* It avoids clinical diagnosis or production claims.
