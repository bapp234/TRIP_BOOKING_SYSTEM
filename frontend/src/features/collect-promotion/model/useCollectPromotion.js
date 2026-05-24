import { useCallback, useMemo, useState } from 'react';

const MOCK_CHECK_DELAY = 800;
const UNAVAILABLE_MESSAGE = 'Ưu đãi chưa đủ điều kiện áp dụng cho tài khoản này.';

export const useCollectPromotion = () => {
  const [collectedPromotions, setCollectedPromotions] = useState([]);
  const [loadingPromoId, setLoadingPromoId] = useState(null);
  const [promotionErrors, setPromotionErrors] = useState({});

  const collectedIds = useMemo(
    () => new Set(collectedPromotions.map((promo) => promo.id)),
    [collectedPromotions],
  );

  const isCollected = useCallback((promoId) => collectedIds.has(promoId), [collectedIds]);

  const getPromotionStatus = useCallback(
    (promo) => {
      if (loadingPromoId === promo.id) return 'loading';
      if (isCollected(promo.id)) return 'collected';
      if (promotionErrors[promo.id]) return 'unavailable';
      return 'idle';
    },
    [isCollected, loadingPromoId, promotionErrors],
  );

  const getPromotionError = useCallback(
    (promoId) => promotionErrors[promoId] || '',
    [promotionErrors],
  );

  const handleCollectPromotion = useCallback((promo) => {
    if (!promo?.id) return;
    if (loadingPromoId || collectedIds.has(promo.id)) return;

    setLoadingPromoId(promo.id);
    setPromotionErrors((current) => {
      const next = { ...current };
      delete next[promo.id];
      return next;
    });

    window.setTimeout(() => {
      // TODO: Replace mock eligibility check with real promotion API.
      const isEligible = promo.isAvailable !== false;

      if (!isEligible) {
        setPromotionErrors((current) => ({
          ...current,
          [promo.id]: UNAVAILABLE_MESSAGE,
        }));
        setLoadingPromoId(null);
        return;
      }

      setCollectedPromotions((current) => {
        if (current.some((item) => item.id === promo.id)) return current;
        return [...current, promo];
      });
      setLoadingPromoId(null);
    }, MOCK_CHECK_DELAY);
  }, [collectedIds, loadingPromoId]);

  return {
    collectedPromotions,
    loadingPromoId,
    handleCollectPromotion,
    getPromotionError,
    getPromotionStatus,
    isCollected,
  };
};
