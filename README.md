# React Calendar Component

A reusable calendar component for React applications that displays a monthly calendar view with date highlighting.

## Features

- 📅 Display monthly calendar for any given date
- 🎯 Highlight specific dates
- 📱 Responsive and lightweight
- 🎨 Styled with TailwindCSS
- ✅ Fully tested with React Testing Library
- 📝 TypeScript support
- ⚡ Performance optimized with React hooks

## Installation

This component is part of a component library. To use it in your project:

```bash
npm install
```

```bash
npm run start
```

## Usage

### Basic Usage

```tsx
import Calendar from "./Calendar";

function App() {
  return <Calendar date="03/11/2025" />;
}
```

### With Date Object

```tsx
import Calendar from "./Calendar";

function App() {
  const dateObj = new Date(2025, 10, 3); // November 3, 2025
  return <Calendar date={dateObj} />;
}
```

### With Default Date (Current Date)

```tsx
import Calendar from "./Calendar";

function App() {
  return <Calendar />; // Uses current date
}
```

## Props

| Prop   | Type             | Default      | Description                                       |
| ------ | ---------------- | ------------ | ------------------------------------------------- |
| `date` | `string \| Date` | `new Date()` | The date to display and highlight in the calendar |

### Date Format

When using a string date, use the **DD/MM/YYYY** format:

- ✅ `"03/11/2025"` - 3rd November 2025
- ✅ `"23/03/2020"` - 23rd March 2020
- ✅ `"15/01/2024"` - 15th January 2024
- ❌ `"11/03/2025"` - This would be interpreted as 11th March, not November 3rd

## Examples

### November 2025 Calendar

```tsx
<Calendar date="03/11/2025" />
```

Displays November 2025 with the 3rd highlighted.

### March 2020 Calendar

```tsx
<Calendar date="23/03/2020" />
```

Displays March 2020 with the 23rd highlighted.

### Leap Year Support

```tsx
<Calendar date="29/02/2024" />
```

Correctly handles leap years and displays February with 29 days.

## Component Structure

```
Calendar/
├── Calendar.tsx       # Main component
├── Calendar.test.tsx  # Comprehensive test suite
├── utils.ts          # Utility functions
├── App.tsx           # Example usage
└── README.md         # Documentation
```

## Styling

The component uses TailwindCSS for styling with a dark theme:

- **Background**: Dark gray (`bg-gray-950`)
- **Text**: Blue (`text-blue-300`)
- **Highlighted Date**: Blue background with dark text (`bg-blue-300`, `text-gray-950`)
- **Font**: Monospace (`font-mono`)

### Customization

To customize the appearance, modify the className properties in `Calendar.tsx`:

```tsx
// Current styling
<div className="bg-gray-950 text-blue-300 font-mono p-2 w-[14rem]">

// Custom styling example
<div className="bg-white text-gray-800 p-4 rounded-lg shadow-lg">
```

## Testing

The component includes a comprehensive test suite covering:

- ✅ Basic rendering
- ✅ Month and year display
- ✅ Date highlighting
- ✅ Calendar days display
- ✅ Different date formats
- ✅ Edge cases (leap years, month transitions)
- ✅ Week alignment
- ✅ Styling and classes
- ✅ Component reusability

### Running Tests

```bash
npm test
```

### Test Coverage

```bash
npm test -- --coverage
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The component uses React's `useMemo` hook to optimize performance by memoizing:

- Calendar date parsing
- Month name calculation
- Year extraction
- Week days generation
- Calendar days generation

This ensures that expensive calculations only run when the `date` prop changes.

## Accessibility

The component includes `data-testid` attributes for testing and can be enhanced with ARIA labels for improved screen reader support.

## Technical Decisions

### Why DD/MM/YYYY Format?

This format is commonly used internationally and matches the visual representation (day → month → year).

### Why useMemo?

All derived values are memoized to prevent unnecessary recalculations on re-renders, improving performance especially when the component is used multiple times.

### Why Separate Utility Functions?

Separating calendar logic into pure utility functions:

- Makes code more testable
- Improves code reusability
- Keeps the component focused on presentation
- Follows separation of concerns principle

## API Reference

### Utility Functions

See `utils.ts` for detailed documentation on:

- `getMonthName(date)` - Get the month name for a date
- `getYear(date)` - Get the year for a date
- `getFormattedDate(date)` - Convert string or Date to Date object
- `getWeekDays()` - Get weekday abbreviations
- `generateCalendarDays(date)` - Generate calendar grid
- `checkDateEqual(date1, date2)` - Compare two dates
- `checkMonthEqual(date1, date2)` - Compare months of two dates

## Version

1.0.0

---
