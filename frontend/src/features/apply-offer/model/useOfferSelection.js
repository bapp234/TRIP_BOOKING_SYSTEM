import { useState, useCallback } from 'react';
import { getOfferByCode, isOfferEligible } from '../config';

/**
 * useOfferSelection - Manage offer/voucher selection state
 * Handles: select offer, calculate discount, validate eligibility
 */
export const useOfferSelection = (totalPrice) => {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(0);

  const calculateDiscount = useCallback(
    (offer) => {
      if (!offer || !isOfferEligible(offer, totalPrice)) {
        return 0;
      }

      let discount = 0;

      if (offer.discountType === 'percent') {
        discount = (totalPrice * offer.discountValue) / 100;
      } else if (offer.discountType === 'fixed') {
        discount = offer.discountValue;
      }

      // Apply max discount cap if exists
      if (offer.maxDiscount !== null && discount > offer.maxDiscount) {
        discount = offer.maxDiscount;
      }

      // Ensure discount doesn't exceed total price
      if (discount > totalPrice) {
        discount = totalPrice;
      }

      return discount;
    },
    [totalPrice]
  );

  const applyOffer = useCallback(
    (offer) => {
      if (!offer) {
        setSelectedOffer(null);
        setDiscountAmount(0);
        return false;
      }

      if (!isOfferEligible(offer, totalPrice)) {
        return false;
      }

      const discount = calculateDiscount(offer);
      setSelectedOffer(offer);
      setDiscountAmount(discount);
      return true;
    },
    [totalPrice, calculateDiscount]
  );

  const applyOfferByCode = useCallback(
    (code) => {
      const offer = getOfferByCode(code);
      if (!offer) {
        return { success: false, message: 'Mã ưu đãi không tồn tại' };
      }

      if (!isOfferEligible(offer, totalPrice)) {
        return { success: false, message: offer.unavailableReason || 'Mã ưu đãi không hợp lệ' };
      }

      const discount = calculateDiscount(offer);
      setSelectedOffer(offer);
      setDiscountAmount(discount);
      return { success: true, offer, discount };
    },
    [totalPrice, calculateDiscount]
  );

  const removeOffer = useCallback(() => {
    setSelectedOffer(null);
    setDiscountAmount(0);
  }, []);

  const finalPrice = Math.max(0, totalPrice - discountAmount);

  return {
    selectedOffer,
    discountAmount,
    finalPrice,
    applyOffer,
    applyOfferByCode,
    removeOffer,
    isOfferApplied: !!selectedOffer,
  };
};
