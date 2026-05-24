/**
 * Seat Layout Configurations for Different Vehicle Types
 * Defines layout (columns, seat size, density) for different transportation modes
 */

export const SEAT_LAYOUTS = {
  'car-4': {
    label: 'Xe 4 chỗ',
    columns: 2,
    maxSeats: 4,
    compact: true,
    seatSize: 'w-8 h-8',
    rowGap: 'gap-2',
  },
  'car-7': {
    label: 'Xe 7 chỗ',
    columns: 3,
    maxSeats: 7,
    compact: true,
    seatSize: 'w-8 h-8',
    rowGap: 'gap-2',
  },
  'van-16': {
    label: 'Xe 16 chỗ',
    columns: 4,
    maxSeats: 16,
    compact: false,
    seatSize: 'w-8 h-8',
    rowGap: 'gap-2',
  },
  'sleeper-32': {
    label: 'Giường nằm 32 chỗ',
    columns: 4,
    maxSeats: 32,
    compact: false,
    seatSize: 'w-7 h-7',
    rowGap: 'gap-1.5',
  },
  'sleeper-34': {
    label: 'Giường nằm 34 chỗ',
    columns: 4,
    maxSeats: 34,
    compact: false,
    seatSize: 'w-7 h-7',
    rowGap: 'gap-1.5',
  },
  'bus-50': {
    label: 'Xe 50 chỗ',
    columns: 5,
    maxSeats: 50,
    compact: false,
    seatSize: 'w-7 h-7',
    rowGap: 'gap-1.5',
  },
  'train': {
    label: 'Tàu hỏa',
    columns: 4,
    compact: false,
    seatSize: 'w-7 h-7',
    rowGap: 'gap-1.5',
  },
};

/**
 * Determine seat layout based on trip data
 * Fallback strategy based on totalSeats if vehicleType not provided
 */
export const getSeatLayoutByTrip = (trip) => {
  // If trip explicitly provides vehicleType, use it
  if (trip.vehicleType && SEAT_LAYOUTS[trip.vehicleType]) {
    return SEAT_LAYOUTS[trip.vehicleType];
  }

  // Fallback: infer from totalSeats
  const totalSeats = trip.totalSeats || 34;

  if (totalSeats <= 4) return SEAT_LAYOUTS['car-4'];
  if (totalSeats <= 7) return SEAT_LAYOUTS['car-7'];
  if (totalSeats <= 16) return SEAT_LAYOUTS['van-16'];
  if (totalSeats <= 34) return SEAT_LAYOUTS['sleeper-34'];
  if (totalSeats <= 50) return SEAT_LAYOUTS['bus-50'];

  // Assume train for anything larger
  return { ...SEAT_LAYOUTS['train'], maxSeats: totalSeats };
};
