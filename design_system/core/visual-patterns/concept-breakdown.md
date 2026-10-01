# Pattern: Concept Breakdown

- **ID**: `concept_breakdown`
- **Category**: Instructional / Clarification
- **Purpose**: Deconstructs an entangled or misused term (e.g., sex vs gender, analyze vs assert) into discrete, unambiguous categories.

## Structure

```jsx
<Stage states={2} labels={["DEFINITION", "DISTINCTION"]}>
  {(state) => (
    <SceneFrame topic="METHODOLOGY" badge="ANALYSIS">
      <Statement
        eyebrow="DISTINCTION"
        heading="SEX ≠ GENDER"
        accent="≠"
        subhead="They are different analytical categories with different criteria."
        presence={state === 0 ? "primary" : "recede"}
      />
      {state === 1 && (
        <Annotation side="left" tone="critical" marker="arrow">
          Conflating definitions creates insoluble arguments
        </Annotation>
      )}
    </SceneFrame>
  )}
</Stage>
```

## State Matrix & Motion Verbs

| State | Action | Motion Verb | Hold Duration |
| :--- | :--- | :--- | :--- |
| **0: Definition** | Bold term deconstruction appears | `REVEAL` | `--hold-read` (2.2s) |
| **1: Distinction** | Term recedes; Annotation highlights category separation | `TRANSFORM` + `FOCUS` | `--hold-think` (5.0s) |
