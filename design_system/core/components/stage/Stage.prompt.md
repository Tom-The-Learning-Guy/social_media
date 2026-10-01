# Stage Component Guidance

`Stage` holds the active visual-state index for a social video beat or sequence.

Social video scenes should be designed as progressive visual states (`STATE 0 -> 1 -> 2 -> RESOLVED`), rather than static slide layouts.

## The Attention Axis: `presence`

Components support three levels of presence:
- `primary`: Full prominence. Default.
- `recede`: Still visible for context and continuity, but reduced in opacity/contrast so it does not compete with the active focus.
- `collapse`: Removed from layout.

Use `presenceStyle(presence)` helper for custom elements.

## Usage

```jsx
<Stage states={3} labels={["CLAIM", "EVIDENCE", "RESOLVED"]} controls>
  {(state) => (
    <SceneFrame topic="ECONOMICS" step={`${state + 1} / 3`}>
      <Statement
        heading="Wealth concentration is accelerating."
        presence={state === 0 ? "primary" : "recede"}
      />
      {state >= 1 && (
        <EvidenceFrame
          type="headline"
          source="Financial Times"
          date="2024"
          title="Top 0.1% holds record wealth share"
          presence={state === 1 ? "primary" : "recede"}
        />
      )}
      {state === 2 && (
        <Annotation tone="accent" marker="arrow">
          Systemic imbalance established
        </Annotation>
      )}
    </SceneFrame>
  )}
</Stage>
```
