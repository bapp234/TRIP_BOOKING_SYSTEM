/**
 * Mock Offers Configuration
 * Temporary mock data for testing before API integration
 * Format: id, code, title, description, discountType, discountValue, minOrderValue, maxDiscount, isAvailable, unavailableReason
 */

export const MOCK_OFFERS = [
  {
    id: 'offer-1',
    code: 'SUMMER25',
    title: 'Hè Siêu Sale',
    description: 'Giảm 25% cho tất cả chuyến xe',
    discountType: 'percent', // 'percent' | 'fixed'
    discountValue: 25,
    minOrderValue: 0,
    maxDiscount: 500000, // Max discount amount
    isAvailable: true,
    unavailableReason: null,
  },
  {
    id: 'offer-2',
    code: 'SAVE50',
    title: 'Giảm Ngay 50K',
    description: 'Giảm 50.000đ cho đơn hàng từ 300.000đ',
    discountType: 'fixed',
    discountValue: 50000,
    minOrderValue: 300000,
    maxDiscount: 50000,
    isAvailable: true,
    unavailableReason: null,
  },
  {
    id: 'offer-3',
    code: 'VEX10',
    title: 'Vexere Member',
    description: 'Giảm 10% cho thành viên Vexere',
    discountType: 'percent',
    discountValue: 10,
    minOrderValue: 200000,
    maxDiscount: 300000,
    isAvailable: true,
    unavailableReason: null,
  },
  {
    id: 'offer-4',
    code: 'WELCOME100',
    title: 'Chào mừng lần đầu',
    description: 'Giảm 100.000đ cho khách hàng mới',
    discountType: 'fixed',
    discountValue: 100000,
    minOrderValue: 500000,
    maxDiscount: 100000,
    isAvailable: false,
    unavailableReason: 'Đơn hàng bạn không đủ điều kiện tối thiểu',
  },
  {
    id: 'offer-5',
    code: 'LUCKY20',
    title: 'May Mắn Hôm Nay',
    description: 'Giảm 20% - Cơ hội quý hiếm',
    discountType: 'percent',
    discountValue: 20,
    minOrderValue: 0,
    maxDiscount: null, // No max discount cap
    isAvailable: true,
    unavailableReason: null,
  },
  {
    id: 'offer-6',
    code: 'EXPIRED2024',
    title: 'Hết hạn',
    description: 'Mã này đã hết hạn sử dụng',
    discountType: 'percent',
    discountValue: 15,
    minOrderValue: 0,
    maxDiscount: 200000,
    isAvailable: false,
    unavailableReason: 'Mã ưu đãi này đã hết hạn sử dụng',
  },
];

/**
 * Get offer by code (case-insensitive)
 */
export const getOfferByCode = (code) => {
  return MOCK_OFFERS.find((offer) => offer.code.toUpperCase() === code.toUpperCase());
};

/**
 * Get all available offers
 */
export const getAvailableOffers = () => {
  return MOCK_OFFERS.filter((offer) => offer.isAvailable);
};

/**
 * Check if offer can be applied to total price
 */
export const isOfferEligible = (offer, totalPrice) => {
  if (!offer.isAvailable) return false;
  if (totalPrice < offer.minOrderValue) return false;
  return true;
};
