# EvidenceFrame Component Guidance

Standard presentation frame for evidence items (headlines, tweets, primary documents, statistics, quotes) in social video. Directly addresses Sections 15 and 24 of the content specification.

## Usage

```jsx
<EvidenceFrame
  type="headline"
  source="The Wall Street Journal"
  date="September 2024"
  status="verified"
  title="Federal Reserve Signals Rate Shifts Amid Labour Data"
  content="Consumer inflation indices slowed to 2.4%, challenging forecasts."
  citation="wsj.com/economy/fed-rate-signals-2024"
  presence="primary"
/>
```

## Status Values
- `verified`: Formally verified claim or primary data.
- `official`: Official government, corporate, or institutional filing.
- `contested`: Disputed statement requiring analysis.
- `unverified`: Sourced viral assertion that has not met primary verification standard.
