import { useState, useCallback } from 'react';

/**
 * useSeatSelection - Custom hook for managing seat selection state
 * Handles: select/deselect seats, calculate total price, validate selections
 */
export const useSeatSelection = (basePrice, maxSeats = 4) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = useCallback((seatId, seatPrice = basePrice) => {
    setSelectedSeats((prev) => {
      const isSelected = prev.some((s) => s.id === seatId);

      if (isSelected) {
        // Deselect
        return prev.filter((s) => s.id !== seatId);
      } else {
        // Select if under max
        if (prev.length < maxSeats) {
          return [...prev, { id: seatId, price: seatPrice }];
        }
      }

      return prev;
    });
  }, [maxSeats, basePrice]);

  const clearSelection = useCallback(() => {
    setSelectedSeats([]);
  }, []);

  const isSeatSelected = useCallback((seatId) => {
    return selectedSeats.some((s) => s.id === seatId);
  }, [selectedSeats]);

  const totalPrice = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

  const canSelectMore = selectedSeats.length < maxSeats;

  return {
    selectedSeats,
    toggleSeat,
    clearSelection,
    isSeatSelected,
    totalPrice,
    canSelectMore,
    seatCount: selectedSeats.length,
  };
};
