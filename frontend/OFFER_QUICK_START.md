# Offer Feature - Quick Developer Guide

**Version**: 1.0 | **Status**: ✅ Production Ready

---

## 🚀 Quick Start

### Using in Your Component

```jsx
import { useOfferSelection } from '@/features/apply-offer';
import { OfferModal } from '@/features/apply-offer';

export const MyBookingComponent = ({ totalPrice }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const {
    selectedOffer,
    discountAmount,
    finalPrice,
    applyOfferByCode,
    removeOffer,
    isOfferApplied,
  } = useOfferSelection(totalPrice);

  const handleSelectOffer = (codeOrOffer) => {
    // Works with both string code and offer object
    return applyOfferByCode(
      typeof codeOrOffer === 'string' ? codeOrOffer : codeOrOffer.code
    );
  };

  return (
    <>
      {/* Display offer info */}
      {isOfferApplied && (
        <div>
          Mã: {selectedOffer.code}
          Giảm: {discountAmount.toLocaleString('vi-VN')}đ
          Tổng: {finalPrice.toLocaleString('vi-VN')}đ
        </div>
      )}

      {/* Modal */}
      <OfferModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectOffer={handleSelectOffer}
        totalPrice={totalPrice}
      />
    </>
  );
};
```

---

## 📦 Exports Reference

```javascript
// ✅ USE THESE
export { useOfferSelection } from '@/features/apply-offer';
export { OfferSelectorButton, OfferModal } from '@/features/apply-offer';
export { MOCK_OFFERS, getOfferByCode, getAvailableOffers } from '@/features/apply-offer';

// ✅ OR IMPORT DIRECTLY
import { useOfferSelection } from '@/features/apply-offer/model/useOfferSelection';
import { OfferModal } from '@/features/apply-offer/ui/OfferModal';
import { MOCK_OFFERS } from '@/features/apply-offer/config';
```

---

## 🎣 useOfferSelection Hook

### API

```javascript
const {
  // State
  selectedOffer,        // { id, code, title, ... } or null
  discountAmount,       // 0 initially
  finalPrice,           // totalPrice - discountAmount
  isOfferApplied,       // boolean
  
  // Methods
  applyOffer,           // (offer) => boolean
  applyOfferByCode,     // (code) => { success, message, offer?, discount? }
  removeOffer,          // () => void
} = useOfferSelection(totalPrice);
```

### Examples

```javascript
// Apply by code
const result = applyOfferByCode('SUMMER25');
if (result.success) {
  console.log('Discount:', result.discount);
} else {
  console.log('Error:', result.message);
}

// Apply offer object directly
const offer = MOCK_OFFERS[0];
applyOffer(offer);

// Remove current offer
removeOffer();

// Check if applied
if (isOfferApplied) {
  console.log('Offer applied:', selectedOffer.code);
}
```

---

## 🎨 OfferSelectorButton

### Props

```jsx
<OfferSelectorButton
  isOfferApplied={boolean}       // Show active state
  selectedOfferCode={string}     // Display code
  onOpenModal={() => {}}         // Click handler
/>
```

### Example

```jsx
const [isOpen, setIsOpen] = useState(false);
const { isOfferApplied, selectedOffer } = useOfferSelection(price);

return (
  <>
    <OfferSelectorButton
      isOfferApplied={isOfferApplied}
      selectedOfferCode={selectedOffer?.code}
      onOpenModal={() => setIsOpen(true)}
    />
    <OfferModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onSelectOffer={(code) => applyOfferByCode(code)}
      totalPrice={totalPrice}
    />
  </>
);
```

---

## 🏪 OfferModal

### Props

```jsx
<OfferModal
  isOpen={boolean}                    // Show/hide modal
  onClose={() => {}}                  // Close handler
  onSelectOffer={(code) => {          // Apply handler
    return { success, message };      // Return result
  }}
  totalPrice={number}                 // For eligibility check
/>
```

### Example

```jsx
const handleSelectOffer = (code) => {
  return applyOfferByCode(code);  // Returns { success, message, offer?, discount? }
};

<OfferModal
  isOpen={modalOpen}
  onClose={() => setModalOpen(false)}
  onSelectOffer={handleSelectOffer}
  totalPrice={totalPrice}
/>
```

---

## 💾 Mock Offers Access

```javascript
import {
  MOCK_OFFERS,           // Array of all offers
  getOfferByCode,        // Get offer by code
  getAvailableOffers,    // Get only active offers
  isOfferEligible,       // Check if applicable
} from '@/features/apply-offer';

// Get all offers
console.log(MOCK_OFFERS);

// Find specific offer
const offer = getOfferByCode('SUMMER25');

// Get available
const available = getAvailableOffers();

// Check eligibility
const canUse = isOfferEligible(offer, totalPrice);

// Offer structure
{
  id: 'offer-1',
  code: 'SUMMER25',
  title: 'Hè Siêu Sale',
  description: 'Giảm 25%',
  discountType: 'percent',      // 'percent' | 'fixed'
  discountValue: 25,
  minOrderValue: 0,
  maxDiscount: 500000,          // null = no cap
  isAvailable: true,
  unavailableReason: null,
}
```

---

## 🧮 Discount Calculation

### Percent Discount
```javascript
// Code: SUMMER25 (25%)
// Price: 1,000,000đ
// Calculation: 1,000,000 × 25 / 100 = 250,000đ
// Final: 1,000,000 - 250,000 = 750,000đ
```

### Fixed Discount
```javascript
// Code: SAVE50 (50K fixed)
// Price: 1,000,000đ
// Calculation: 50,000đ (flat)
// Final: 1,000,000 - 50,000 = 950,000đ
```

### With Max Cap
```javascript
// Code: VEX10 (10%, max 300K)
// Price: 5,000,000đ
// Calculation: 5,000,000 × 10 / 100 = 500,000đ
// But capped at: 300,000đ
// Final: 5,000,000 - 300,000 = 4,700,000đ
```

---

## ✅ Integration Checklist

- ✅ Import `useOfferSelection` hook
- ✅ Initialize with `totalPrice`
- ✅ Create modal state
- ✅ Add `OfferSelectorButton`
- ✅ Add `OfferModal`
- ✅ Wire up `onSelectOffer` handler
- ✅ Display discount in summary
- ✅ Display final price
- ✅ Handle remove offer

---

## 🎯 Common Tasks

### Task 1: Add Offer to Booking Summary

```jsx
export const BookingSummary = ({ totalPrice, selectedSeats }) => {
  const { finalPrice, discountAmount, isOfferApplied, selectedOffer } = 
    useOfferSelection(totalPrice);

  return (
    <div>
      <p>Ghế: {selectedSeats.length}</p>
      <p>Giá gốc: {totalPrice.toLocaleString('vi-VN')}đ</p>
      {isOfferApplied && (
        <>
          <p>Mã: {selectedOffer.code}</p>
          <p>Giảm: {discountAmount.toLocaleString('vi-VN')}đ</p>
        </>
      )}
      <h3>Tổng: {finalPrice.toLocaleString('vi-VN')}đ</h3>
    </div>
  );
};
```

### Task 2: Validate Offer on Custom Button

```jsx
const handleApplyCustomOffer = (code) => {
  const result = applyOfferByCode(code);
  
  if (!result.success) {
    showError(result.message);
    return;
  }
  
  // Discount applied successfully
  showSuccess(`Đã áp dụng mã ${result.offer.code}`);
};
```

### Task 3: Add New Mock Offer

```javascript
// In features/apply-offer/config/mock-offers.js
export const MOCK_OFFERS = [
  // ... existing
  {
    id: 'offer-new',
    code: 'NEWCODE',
    title: 'New Offer',
    description: 'Some description',
    discountType: 'percent',  // or 'fixed'
    discountValue: 15,         // 15% or 15000đ
    minOrderValue: 100000,
    maxDiscount: 200000,       // null for no limit
    isAvailable: true,
    unavailableReason: null,
  },
];
```

### Task 4: Disable Offer Temporarily

```javascript
// In mock-offers.js
{
  id: 'offer-x',
  code: 'PROMO',
  // ...
  isAvailable: false,                    // Disable
  unavailableReason: 'Maintenance',      // Show reason
}
```

---

## 🐛 Debugging

### Check if Offer Applied
```javascript
console.log('Is Applied:', isOfferApplied);
console.log('Selected:', selectedOffer);
console.log('Discount:', discountAmount);
console.log('Final:', finalPrice);
```

### Test Code Application
```javascript
// In browser console
const result = applyOfferByCode('SUMMER25');
console.log(result);
// { success: true, offer: {...}, discount: 250000 }
```

### Check All Offers
```javascript
import { MOCK_OFFERS } from '@/features/apply-offer';
console.log(MOCK_OFFERS);
```

### Verify Eligibility
```javascript
import { isOfferEligible } from '@/features/apply-offer';
const eligible = isOfferEligible(offer, 500000);
console.log('Can use offer:', eligible);
```

---

## 🚨 Common Issues

### Issue: Offer not applying
**Check:**
- Is `isOfferApplied` true in hook?
- Is `applyOfferByCode()` returning success?
- Check console for error message

### Issue: Wrong discount calculated
**Check:**
- Is `discountType` correct ('percent' vs 'fixed')?
- Is `maxDiscount` cap being applied correctly?
- Does `totalPrice` < `minOrderValue`?

### Issue: Modal not showing
**Check:**
- Is `isOpen={true}` passed to modal?
- Is modal state updating on button click?
- Check browser DevTools to inspect modal element

### Issue: TypeScript errors (if using TS)
**Solution:**
- This feature is JavaScript only
- No TypeScript support currently
- Add JSDoc comments if needed

---

## 📋 Props Reference

### useOfferSelection(totalPrice)

| Param | Type | Description |
|-------|------|-------------|
| `totalPrice` | number | Order subtotal before discount |

**Returns**: Hook object with state and methods

### OfferSelectorButton

| Prop | Type | Description |
|------|------|-------------|
| `isOfferApplied` | boolean | Show active state? |
| `selectedOfferCode` | string | Code to display |
| `onOpenModal` | function | Click handler |

### OfferModal

| Prop | Type | Description |
|------|------|-------------|
| `isOpen` | boolean | Show modal? |
| `onClose` | function | Close handler |
| `onSelectOffer` | function | Apply handler |
| `totalPrice` | number | For eligibility |

---

## 🔗 File Structure Reference

```
features/apply-offer/
├── ui/
│   ├── OfferSelectorButton.jsx   ← Button component
│   └── OfferModal.jsx             ← Modal component
├── model/
│   └── useOfferSelection.js       ← State hook
├── config/
│   ├── mock-offers.js            ← Mock data
│   └── index.js                  ← Config exports
└── index.js                      ← Feature API

Usage:
import {
  useOfferSelection,
  OfferModal,
  MOCK_OFFERS,
} from '@/features/apply-offer';
```

---

## ✨ Best Practices

✅ **DO:**
- Use `useOfferSelection` hook for state
- Import from `@/features/apply-offer` (public API)
- Handle both success and failure cases
- Show user-friendly error messages
- Verify discount on checkout

❌ **DON'T:**
- Directly modify MOCK_OFFERS
- Create offers in components
- Skip eligibility checking
- Use hardcoded discount logic
- Trust frontend-only validation

---

## 🚀 Performance Tips

- Hook is lightweight, minimal re-renders
- Discount calculation is O(1)
- Modal is lazy-loaded (only renders when open)
- No external API calls (mock mode)
- Tree-shaking ready

---

**Need more info?** See [OFFER_FEATURE_GUIDE.md](./OFFER_FEATURE_GUIDE.md) for complete documentation.

**Ready to code!** 🎉
