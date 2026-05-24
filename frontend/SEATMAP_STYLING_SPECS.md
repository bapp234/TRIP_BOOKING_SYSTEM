# SeatMap Styling Comparison

## Size & Spacing Specifications

### Container Changes

```jsx
// BEFORE
<div className="bg-gradient-to-b from-zinc-50 to-white rounded-2xl p-6 border border-zinc-200">

// AFTER
<div className="bg-gradient-to-b from-zinc-50 to-white rounded-xl p-3 border border-zinc-200 max-h-[300px] overflow-y-auto">
```

| Property | Before | After | Change |
|----------|--------|-------|--------|
| Padding | p-6 | p-3 | -50% |
| Border Radius | rounded-2xl | rounded-xl | Slightly tighter |
| Max Height | None | 300px | New constraint |
| Overflow | Hidden | overflow-y-auto | Scrollable |

---

### Seat Grid Layout

```jsx
// BEFORE - Fixed 2-column layout
<div className="space-y-2 max-w-fit mx-auto">
  {seatRows.map((row) => (
    <div className="flex gap-6 items-center justify-center">
      {/* Left column */}
      <div className="flex gap-2">{seats[0]}</div>
      {/* Row letter */}
      <div className="text-xs w-4 text-center">{letter}</div>
      {/* Right column */}
      <div className="flex gap-2">{seats[1]}</div>
    </div>
  ))}
</div>

// AFTER - Dynamic column layout
<div className="space-y-1.5 max-w-fit mx-auto">
  {seatRows.map((row) => (
    <div className="flex items-center justify-center gap-1.5">
      {/* All seats in row */}
      <div className="flex gap-1.5 flex-wrap justify-center">
        {row.map((seatNum) => (
          <SeatButton {...} seatSize={layout.seatSize} />
        ))}
      </div>
      {/* Row letter */}
      <div className="text-xs w-5 text-center flex-shrink-0">{letter}</div>
    </div>
  ))}
</div>
```

| Property | Before | After | Change |
|----------|--------|-------|--------|
| Row Gap | space-y-2 | space-y-1.5 | -25% |
| Between Seats | gap-6 | gap-1.5 | -75% |
| Between Row Items | gap-6 | gap-1.5 | -75% |
| Flex Direction | Fixed split (2 groups) | Dynamic (1 group + letter) | More flexible |

---

### Seat Button Sizing

```jsx
// BEFORE - Fixed w-10 h-10
const baseStyles = 'w-10 h-10 rounded-lg font-semibold text-xs transition-all duration-200 border-2 flex items-center justify-center cursor-pointer';

// AFTER - Config-driven sizing
const baseStyles = `${seatSize} rounded-lg font-semibold text-xs transition-all duration-200 border-2 flex items-center justify-center cursor-pointer`;
```

#### Size Presets from Config

```javascript
// Different sizes for different vehicle types
car-4:      { seatSize: 'w-8 h-8' }   // Compact cars
car-7:      { seatSize: 'w-8 h-8' }   // 7-seater
van-16:     { seatSize: 'w-8 h-8' }   // Van
sleeper-32: { seatSize: 'w-7 h-7' }   // Large sleeper
sleeper-34: { seatSize: 'w-7 h-7' }   // Standard sleeper
bus-50:     { seatSize: 'w-7 h-7' }   // Big bus
train:      { seatSize: 'w-7 h-7' }   // Train
```

| Vehicle Type | Button Size | Button Area | Change |
|--------------|-------------|------------|--------|
| All (Old) | w-10 h-10 | 100px² | Baseline |
| car-4,7 | w-8 h-8 | 64px² | **-36%** |
| sleeper | w-7 h-7 | 49px² | **-51%** |
| bus-50 | w-7 h-7 | 49px² | **-51%** |

---

### Cabin Indicator

```jsx
// BEFORE
<div className="text-center mb-6">
  <div className="inline-block px-4 py-1.5 bg-zinc-100 rounded-full text-xs font-medium text-zinc-600 border border-zinc-200">
    Cabin tài xế
  </div>
</div>

// AFTER
<div className="text-center mb-4">
  <div className="inline-block px-3 py-1 bg-zinc-100 rounded-full text-xs font-medium text-zinc-600 border border-zinc-200">
    Cabin tài xế
  </div>
</div>
```

| Property | Before | After | Change |
|----------|--------|-------|--------|
| Padding X | px-4 | px-3 | -25% |
| Padding Y | py-1.5 | py-1 | -33% |
| Margin Bottom | mb-6 | mb-4 | -33% |

---

### Section Heading

```jsx
// BEFORE
<h3 className="text-lg font-semibold text-zinc-900 mb-4">Chọn ghế</h3>

// AFTER
<h3 className="text-base font-semibold text-zinc-900 mb-3">Chọn ghế</h3>
```

| Property | Before | After | Change |
|----------|--------|-------|--------|
| Font Size | text-lg | text-base | -1 step |
| Margin Bottom | mb-4 | mb-3 | -25% |

---

## Real-World Impact: 34-Seat Sleeper Bus

### Layout Dimensions

#### BEFORE (2-column layout)
```
Columns: 2
Rows: 17 (9 full rows A-I, last row has 0 seats)
Grid: 2 × 17

Visual breakdown:
┌──────────────────┐
│ A1  A  A2        │  ← Row A
├──────────────────┤
│ B1  B  B2        │  ← Row B
├──────────────────┤
│ C1  C  C2        │
├──────────────────┤
│ ... (14 more rows)
│ I1  I  (empty)   │  ← Row I (only 2 seats)
└──────────────────┘

Height: ~17 rows × (35px button + 8px gap) = ~732px minimum
```

#### AFTER (4-column layout)
```
Columns: 4
Rows: 9 (Math.ceil(34 / 4) = 9)
Grid: 4 × 9

Visual breakdown:
┌──────────────────────┐
│ A1 A2  A  A3 A4      │  ← Row A (4 seats)
├──────────────────────┤
│ B1 B2  B  B3 B4      │  ← Row B (4 seats)
├──────────────────────┤
│ C1 C2  C  C3 C4      │
├──────────────────────┤
│ ... (6 more rows)
│ H1 H2  H  H3 H4      │
├──────────────────────┤
│ I1 I2  I  (empty)    │  ← Row I (2 seats)
└──────────────────────┘

Height: ~9 rows × (28px button + 6px gap) = ~306px (fits max-h-300px!)
```

### Height Reduction

```
BEFORE: 17 rows × ~43px = ~731px
AFTER:  9 rows × ~34px = ~306px
        (includes cabin indicator, margins, borders)

Reduction: 425px → ~58% smaller!
```

### Impact on Card Expansion

```jsx
// BEFORE - Card expansion adds major height
<TripResultCard>
  <Compact View>          {/* 80px */}
  +
  <ExpandedView>
    <TripDetails>         {/* ~180px */}
    +
    <SeatMap>             {/* 731px ❌ TOO TALL */}
    +
    <Summary>             {/* ~180px */}
  </TripExpandedView>
  ────────────────────────
  Total: ~1171px ❌ Creates huge vertical scroll
</TripResultCard>

// AFTER - Much more reasonable
<TripResultCard>
  <Compact View>          {/* 80px */}
  +
  <ExpandedView>
    <TripDetails>         {/* ~180px */}
    +
    <SeatMap>             {/* ~306px (scrollable) ✅ */}
    +
    <Summary>             {/* ~180px */}
  </TripExpandedView>
  ────────────────────────
  Total: ~746px ✅ Reasonable viewport usage
```

---

## Responsive Considerations

### Mobile Breakpoint (375px width)

```jsx
// Seat grid with 4 columns + row letter
Width breakdown:
- Left padding: 12px (p-3)
- Left column (4 seats): 32 + 6 + 32 + 6 + 32 + 6 + 32 = 146px
- Row letter: 20px
- Right padding: 12px (p-3)
────────────────────────
Total: 12 + 146 + 20 + 12 = 190px ✅ Fits in 375px

// Seat button interaction area
w-7 h-7 = 28px buttons
Still comfortably clickable on touch devices
```

---

## Configuration Examples

### Adding a Custom Vehicle Type

```javascript
// In config/seat-layouts.js
export const SEAT_LAYOUTS = {
  // ... existing types
  
  'limousine-5': {
    label: 'Xe Limousine 5 chỗ',
    columns: 1,           // Single column!
    maxSeats: 5,
    compact: true,
    seatSize: 'w-12 h-12', // Larger buttons for luxury
    rowGap: 'gap-3',
  },
};

// Auto-detection will use it:
if (trip.totalSeats === 5) return SEAT_LAYOUTS['limousine-5'];
```

### Extending for Features

```javascript
'vip-sleeper-32': {
  label: 'Giường nằm VIP 32 chỗ',
  columns: 4,
  maxSeats: 32,
  compact: false,
  seatSize: 'w-8 h-8',
  rowGap: 'gap-2',
  vipSeats: [1, 2, 15, 16],    // Front & back VIP
  wheelchairAccessible: [17],   // Designated space
}
```

---

## CSS Utilities Reference

### Size Classes Used

| Utility | Old | New | Purpose |
|---------|-----|-----|---------|
| width | w-10 | w-8, w-7 | Seat button width |
| height | h-10 | h-8, h-7 | Seat button height |
| padding | p-6 | p-3 | Container padding |
| padding | px-4 py-1.5 | px-3 py-1 | Badge padding |
| gap | gap-6 | gap-1.5 | Between items |
| margin | mb-6 | mb-4, mb-3 | Spacing |
| rounded | rounded-2xl | rounded-xl | Border radius |
| text | text-lg | text-base | Heading size |

### New Classes

| Class | Purpose |
|-------|---------|
| max-h-[300px] | Max height constraint |
| overflow-y-auto | Scrollable content |
| flex-wrap | Wrap seats in flex grid |
| flex-shrink-0 | Prevent row letter shrinking |

---

**Reference**: SeatMap v2.0 Styling Specifications
**Last Updated**: May 24, 2026
