# Quick Reference - Booking Flow

## 🚀 Get Started

### Files to Know
```
frontend/src/
├── entities/trip/ui/TripResultCard.jsx      ← Main expandable card
├── entities/trip/ui/TripExpandedDetails.jsx ← Trip details section
├── features/select-seat/ui/SeatMap.jsx      ← Seat grid
├── features/select-seat/model/useSeatSelection.js ← Seat hook
└── pages/checkout/ui/CheckoutPage.jsx       ← After seat selection
```

### Quick Test
1. Go to `/chuyen-xe` → See trip cards
2. Click "Chọn" button → Card expands inline
3. Click seats (A1, A2...) → Shows selected in summary
4. Click "Tiếp tục" → Navigate to `/checkout`
5. See order recap → Click "Hoàn tất"

---

## 🔧 Code Examples

### Use Seat Selection Hook
```javascript
import { useSeatSelection } from '@/features/select-seat';

export const MyComponent = ({ basePrice }) => {
  const {
    selectedSeats,
    toggleSeat,
    totalPrice,
    seatCount,
  } = useSeatSelection(basePrice, 4); // 4 max seats

  return (
    <>
      <div>Ghế: {seatCount}</div>
      <div>Tổng: {totalPrice.toLocaleString('vi-VN')}đ</div>
      <button onClick={() => toggleSeat('seat-A1')}>
        Chọn A1
      </button>
    </>
  );
};
```

### Render Seat Map
```javascript
import { SeatMap, SeatLegend } from '@/features/select-seat';
import { useSeatSelection } from '@/features/select-seat';

export const BookingForm = ({ trip }) => {
  const seat = useSeatSelection(trip.price, 4);

  return (
    <>
      <SeatMap
        trip={trip}
        selectedSeats={seat.selectedSeats}
        onSeatToggle={seat.toggleSeat}
        isSeatSelected={seat.isSeatSelected}
        canSelectMore={seat.canSelectMore}
      />
      <SeatLegend />
    </>
  );
};
```

### Navigate to Checkout
```javascript
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

// After seat selection
navigate('/checkout', {
  state: {
    trip,
    selectedSeats: ['A1', 'B2'],
    totalPrice: 700000,
  },
});
```

### Receive Data in Checkout
```javascript
import { useLocation } from 'react-router-dom';

export const CheckoutPage = () => {
  const { trip, selectedSeats, totalPrice } = useLocation().state || {};

  if (!trip) {
    return <div>No trip data</div>;
  }

  return <div>{trip.from} → {trip.to}</div>;
};
```

---

## 📝 Component API

### useSeatSelection(basePrice, maxSeats)
```javascript
const {
  selectedSeats,     // [{ id: 'seat-A1', price: 350000 }, ...]
  toggleSeat,        // (seatId: string) => void
  isSeatSelected,    // (seatId: string) => boolean
  totalPrice,        // number (calculated)
  canSelectMore,     // boolean
  seatCount,         // number
  clearSelection,    // () => void
} = useSeatSelection(350000, 4);
```

### SeatMap Props
```javascript
<SeatMap
  trip={trip}                          // Trip data
  selectedSeats={selectedSeats}        // [{ id, price }, ...]
  onSeatToggle={(id) => {}}            // Callback on click
  isSeatSelected={(id) => boolean}     // Check if selected
  canSelectMore={boolean}              // Can select more?
  bookedSeats={[1, 5, 10]}            // (optional) Pre-booked seats
/>
```

### SelectedSeatsSummary Props
```javascript
<SelectedSeatsSummary
  selectedSeats={selectedSeats}        // [{ id, price }, ...]
  totalPrice={totalPrice}              // number
  seatCount={count}                    // number
/>
```

### TripResultCard Props
```javascript
<TripResultCard
  trip={{
    id: 'trip-1',
    operator: { logo: '🚌', name: 'Vexere', rating: 4.8 },
    from: 'TP.HCM',
    to: 'Đà Nẵng',
    pickupPoint: 'Bến xe Miền Đông',
    dropoffPoint: '46 Nam Trần',
    departureTime: '07:30',
    arrivalTime: '14:45',
    duration: '7h 15m',
    price: 350000,
    busType: 'Giường nằm',
    seatsLeft: 12,
    totalSeats: 34,
  }}
/>
```

---

## 🎨 Styling

### Seat Status Colors
```javascript
// Available
"bg-white border-zinc-300 text-zinc-900 hover:border-emerald-500"

// Selected
"bg-emerald-500 border-emerald-600 text-white shadow-md scale-105"

// Booked
"bg-zinc-300 border-zinc-400 text-zinc-600 opacity-60 cursor-not-allowed"

// Disabled (no more seats)
"bg-zinc-100 border-zinc-200 text-zinc-500 opacity-50 cursor-not-allowed"
```

### Animation Classes
```javascript
// Expand animation
animate-in fade-in slide-in-from-top-2 duration-300

// Smooth transitions
transition-all duration-200
transition-colors duration-200

// Scale on select
scale-105
```

---

## 🐛 Debugging

### Check Selected Seats
```javascript
console.log(selectedSeats);
// Output: [{ id: 'seat-A1', price: 350000 }, ...]
```

### Check Total Price
```javascript
const pricePerSeat = trip.price;
const totalPrice = selectedSeats.reduce((sum, s) => sum + s.price, 0);
console.log(`Total: ${totalPrice} = ${selectedSeats.length} × ${pricePerSeat}`);
```

### Test Seat Toggling
```javascript
// In browser console:
toggle('seat-A1');
console.log(isSeatSelected('seat-A1')); // true
toggle('seat-A1');
console.log(isSeatSelected('seat-A1')); // false
```

---

## 🚀 Adding New Features

### Add Discount/Promo
```javascript
const { selectedSeats, totalPrice } = useSeatSelection(trip.price, 4);
const discount = promoCode === 'SAVE10' ? totalPrice * 0.1 : 0;
const finalPrice = totalPrice - discount;
```

### Add More Seat Rows
```javascript
// In mock data (trip.totalSeats)
totalSeats: 50  // Instead of 34
// SeatMap auto-generates rows
```

### Add Passenger Form
```javascript
// In CheckoutPage, add before navigate:
const passengers = formData; // name, email, phone
navigate('/checkout', {
  state: { trip, selectedSeats, totalPrice, passengers }
});
```

---

## 📋 Folder Structure

```
features/select-seat/
├── ui/
│   ├── SeatMap.jsx              (120 lines)
│   ├── SeatLegend.jsx           (25 lines)
│   └── SelectedSeatsSummary.jsx (45 lines)
├── model/
│   └── useSeatSelection.js      (52 lines)
└── index.js                      (Public API)

entities/trip/
├── ui/
│   ├── TripResultCard.jsx       (140 lines, expandable)
│   └── TripExpandedDetails.jsx  (85 lines)
└── index.js

pages/checkout/
├── ui/
│   └── CheckoutPage.jsx         (95 lines)
└── index.js
```

---

## 🔗 Important Imports

```javascript
// Features
import { SeatMap, SeatLegend, SelectedSeatsSummary, useSeatSelection } 
  from '@/features/select-seat';

// Entities
import { TripResultCard, TripExpandedDetails } 
  from '@/entities/trip';

// Pages
import { CheckoutPage } 
  from '@/pages/checkout';

// Router
import { useNavigate, useLocation } 
  from 'react-router-dom';
```

---

## ✅ Common Tasks

### Task 1: Change Max Seats from 4 to 2
```javascript
// In TripResultCard.jsx, line ~17
const { selectedSeats, ... } = useSeatSelection(trip.price, 2); // ← Change 4 to 2
```

### Task 2: Add New Amenity
```javascript
// In TripExpandedDetails.jsx, add to amenities array:
{ icon: '🎥', name: 'TV Giải trí', available: true },
```

### Task 3: Change Seat Colors
```javascript
// In SeatMap.jsx, find SeatButton component:
// Modify classname conditionally
if (status === 'selected') styles += ' bg-blue-500'; // Change color
```

### Task 4: Add Price Discount
```javascript
// In CheckoutPage.jsx:
const discount = selectedSeats.length > 2 ? totalPrice * 0.05 : 0;
const finalPrice = totalPrice - discount;
```

---

## 🎯 State Flow

```
TripResultCard (isExpanded = false)
        ↓ User clicks "Chọn"
TripResultCard (isExpanded = true)
        ↓ Renders SeatMap
User selects seats via SeatMap
        ↓ triggers useSeatSelection hook
selectedSeats, totalPrice updated
        ↓ SeatMap re-renders, Summary updates
User clicks "Tiếp tục"
        ↓ navigate('/checkout', { state })
CheckoutPage receives data
        ↓ Displays order summary
User clicks "Hoàn tất"
        ↓ Demo alert (or call API)
Confirmation
```

---

## 📞 Support

- Check [BOOKING_FLOW_GUIDE.md](./BOOKING_FLOW_GUIDE.md) for detailed architecture
- Check [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) for overview
- Check console errors: F12 → Console tab
- Build: `pnpm build` (in frontend dir)
- Dev: `pnpm dev` (in frontend dir)

---

**Last Updated:** 2026-05-24 | Pattern: FSD | Status: ✅ Production Ready
