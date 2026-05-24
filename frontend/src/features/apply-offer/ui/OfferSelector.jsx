import { useState } from 'react';
import { OfferSelectorButton } from './OfferSelectorButton';
import { OfferModal } from './OfferModal';

/**
 * OfferSelector - Small wrapper that owns modal open state.
 * Keeps SelectedSeatsSummary lean by handling modal lifecycle here.
 */
export const OfferSelector = ({ isOfferApplied, selectedOfferCode, onApply, totalPrice }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (codeOrOffer) => {
    // delegate applying to parent via onApply
    const code = typeof codeOrOffer === 'string' ? codeOrOffer : codeOrOffer.code;
    const result = onApply(code);
    if (result && result.success) {
      setIsOpen(false);
    }
    return result;
  };

  return (
    <>
      <OfferSelectorButton
        isOfferApplied={isOfferApplied}
        selectedOfferCode={selectedOfferCode}
        onOpenModal={() => setIsOpen(true)}
      />

      <OfferModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSelectOffer={handleSelect}
        totalPrice={totalPrice}
      />
    </>
  );
};
