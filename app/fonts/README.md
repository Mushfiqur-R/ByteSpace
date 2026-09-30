# Local fonts

This folder is where the design-system fonts that are **not** on Google Fonts go.
Nothing here is required for the build — the font tokens in `app/globals.css`
already resolve without them — but the design uses two families that must be
dropped in here to render exactly like Figma.

| File | Weight | Used by |
| --- | --- | --- |
| `Satoshi-Regular.woff2` | 400 | `font-satoshi` — body text, descriptions, course metadata, instructor names |
| `Satoshi-Medium.woff2` | 500 | `font-satoshi` — labels, buttons, tabs, category names, chips |
| `ClashDisplay-Bold.woff2` | 700 | `font-clash-display` — the “ByteSpace” wordmark (navbar + footer) |

## Activating them

`app/layout.tsx` already contains the `next/font/local` blocks, commented out
with instructions. Once the files above exist:

1. Un-comment the `localFont` blocks in `app/layout.tsx`.
2. Add `${satoshi.variable}` / `${clashDisplay.variable}` to the `className` of
   `<html>` in the same file.

That is the only change needed: `app/globals.css` already resolves
`var(--font-local-satoshi, "Satoshi")` and
`var(--font-local-clash-display, "Clash Display")`, so every component using
`font-satoshi` / `font-clash-display` picks the real files up automatically.

Until the files are added, those utilities fall back to the family name (if it
happens to be installed on the machine) and then to a generic sans stack — never
to a serif/Times New Roman fallback.
