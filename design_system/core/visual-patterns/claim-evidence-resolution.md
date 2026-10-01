# Pattern: Claim → Evidence → Resolution

- **ID**: `claim_evidence_resolution`
- **Category**: Analytical / Commentary
- **Purpose**: Establishes a bold claim, surfaces verified documentary or empirical evidence, and lands a reasoned conclusion.

## Structure

```jsx
<Stage states={3} labels={["CLAIM", "EVIDENCE", "RESOLVED"]}>
  {(state) => (
    <SceneFrame topic="POLITICS" step={`${state + 1} / 3`} caption="Claim -> Evidence -> Resolution">
      <Statement
        eyebrow="CLAIM"
        heading="Wealth concentration has decoupled from productivity."
        presence={state === 0 ? "primary" : "recede"}
      />
      {state >= 1 && (
        <EvidenceFrame
          type="statistic"
          source="Congressional Budget Office"
          date="2024"
          status="official"
          title="Top 1% Wealth Share: 1989-2024"
          content="Share increased by 14 percentage points while median wage growth remained stagnant."
          citation="cbo.gov/publication/59821"
          presence={state === 1 ? "primary" : "recede"}
        />
      )}
      {state >= 2 && (
        <Annotation side="left" tone="accent" marker="arrow">
          Systemic imbalance established
        </Annotation>
      )}
    </SceneFrame>
  )}
</Stage>
```

## State Matrix & Motion Verbs

| State | Action | Motion Verb | Hold Duration |
| :--- | :--- | :--- | :--- |
| **0: Claim** | Statement enters frame | `REVEAL` | `--hold-read` (2.2s) |
| **1: Evidence** | Statement recedes; EvidenceFrame enters | `DEEMPHASIZE` + `REVEAL` | `--hold-inspect` (3.6s) |
| **2: Resolved** | Evidence recedes; Annotation lands punchline | `FOCUS` + `RESOLVE` | `--hold-think` (5.0s) |
