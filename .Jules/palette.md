## 2026-02-04 - [Accessibility in Emoji Selectors]
**Learning:** Emojis are inherently ambiguous for screen readers and lack visual hints for their precise meaning. Using `Tooltip` and `Semantics` together provides both a visual hint on hover and a clear, explicit label for accessibility.
**Action:** Always wrap emoji-based buttons or selectors in `Tooltip` and `Semantics` widgets with descriptive text labels.

## 2026-02-04 - [Progress Indicator Semantics]
**Learning:** Standard `LinearProgressIndicator` in Flutter doesn't automatically announce its label or current value to screen readers.
**Action:** Wrap `LinearProgressIndicator` in a `Semantics` widget and use the `label` and `value` properties to provide context (e.g., "Journey progress: 45%").
