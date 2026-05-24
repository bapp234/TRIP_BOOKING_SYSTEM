export const PAYMENT_METHODS = [
  {
    id: 'vnpay',
    name: 'VNPay',
    description: 'Thanh toán qua cổng VNPay bằng QR hoặc tài khoản ngân hàng.',
    badge: 'Sắp hỗ trợ',
    accentClass: 'text-blue-700 bg-blue-50 border-blue-100',
  },
  {
    id: 'momo',
    name: 'MoMo',
    description: 'Mô phỏng ví điện tử MoMo, sẵn sàng kết nối ở phiên bản sau.',
    badge: 'Sắp hỗ trợ',
    accentClass: 'text-pink-700 bg-pink-50 border-pink-100',
  },
  {
    id: 'atm',
    name: 'ATM nội địa',
    description: 'Thanh toán bằng thẻ ngân hàng nội địa qua cổng thanh toán.',
    badge: 'Mô phỏng',
    accentClass: 'text-orange-700 bg-orange-50 border-orange-100',
  },
  {
    id: 'pay-at-counter',
    name: 'Thanh toán tại nhà xe',
    description: 'Giữ chỗ trước và thanh toán trực tiếp khi nhận vé.',
    badge: 'Mô phỏng',
    accentClass: 'text-emerald-700 bg-emerald-50 border-emerald-100',
  },
];

export const getPaymentMethodName = (methodId) =>
  PAYMENT_METHODS.find((method) => method.id === methodId)?.name || 'VNPay';
