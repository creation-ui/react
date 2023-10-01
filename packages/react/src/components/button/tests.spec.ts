export const tests = [
  { description: 'renders button with text' },
  { description: 'handles click events' },
  { description: 'displays a loading state' },
  { description: 'is disabled when loading' },
  { description: 'applies custom class names' },
  { description: 'renders button with iconLeft' },
  { description: 'renders button with iconRight' },
  { description: 'displays loader on the left when loading and not circle' },
  { description: 'displays loader in the center when loading and circle' },
  { description: 'renders button with different size' },
  { description: 'renders button with different variant' },
  { description: 'renders button with different status' },
  { description: 'renders circle button' },
  { description: 'applies uppercase class when uppercase prop is true' },
  { description: 'forwards ref to button element' },
  {
    description:
      'renders button with default theme values when no theme is provided',
  },
  { description: 'applies theme values from useTheme hook when provided' },
  { description: 'does not trigger click event when disabled' },
  { description: 'adds passed id to button' },
  { description: 'generates an id using useId hook when no id is provided' },
  { description: 'does not render loader when not loading' },
  { description: 'disables InteractiveContainer when button is disabled' },
  {
    description:
      'applies the correct styles for each combination of variant and status',
  },
  { description: 'applies the correct styles when circle prop is true' },
]
