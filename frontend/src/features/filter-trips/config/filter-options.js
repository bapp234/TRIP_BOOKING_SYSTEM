/**
 * Filter options configuration
 * These constants define available filter options for trip filtering
 * 
 * Ready for API integration:
 * - In future, these can be fetched from /api/filters endpoint
 * - Structure matches backend filter response schema
 */

export const PRICE_RANGES = [
  { label: 'Dưới 300.000đ', min: 0, max: 300000 },
  { label: '300.000 - 400.000đ', min: 300000, max: 400000 },
  { label: '400.000 - 500.000đ', min: 400000, max: 500000 },
  { label: 'Trên 500.000đ', min: 500000, max: 9999999 },
];

export const DEPARTURE_TIMES = [
  { label: 'Sáng (5h - 12h)', value: 'morning' },
  { label: 'Chiều (12h - 18h)', value: 'afternoon' },
  { label: 'Tối (18h - 24h)', value: 'evening' },
];

export const BUS_TYPES = [
  { label: 'Ghế ngồi', value: 'seat' },
  { label: 'Giường nằm', value: 'sleeper' },
  { label: 'Limousine', value: 'limousine' },
];

export const OPERATORS = [
  'Vexere Bus',
  'Sao Việt',
  'Luxe Bus',
];
