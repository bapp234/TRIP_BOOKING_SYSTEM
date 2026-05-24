import { getSeatLayoutByTrip } from '../config';

/**
 * SeatMap - Compact seat selection visualization
 * Supports multiple vehicle types with flexible layout
 * No longer hardcoded to 2 columns - uses config based on vehicle type
 */
export const SeatMap = ({
  trip,
  selectedSeats,
  onSeatToggle,
  isSeatSelected,
  canSelectMore,
  bookedSeats = [],
}) => {
  // Get layout config based on trip vehicle type or total seats
  const layout = getSeatLayoutByTrip(trip);
  const totalSeats = trip.totalSeats || layout.maxSeats;
  const columns = layout.columns;

  // Generate seat grid rows based on config columns
  const seatRows = [];
  for (let i = 0; i < Math.ceil(totalSeats / columns); i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      const seatNumber = i * columns + j + 1;
      if (seatNumber <= totalSeats) {
        row.push(seatNumber);
      }
    }
    seatRows.push(row);
  }

  const getSeatLabel = (seatNum) => {
    const row = Math.floor((seatNum - 1) / columns);
    const col = (seatNum - 1) % columns;
    const rowLetter = String.fromCharCode(65 + row); // A, B, C, ...
    const colNum = col + 1;
    return `${rowLetter}${colNum}`;
  };

  const getSeatStatus = (seatNum) => {
    if (isSeatSelected(`seat-${seatNum}`)) return 'selected';
    if (bookedSeats.includes(seatNum)) return 'booked';
    return 'available';
  };

  return (
    <section className="space-y-3">
      <h3 className="text-base font-semibold text-zinc-900">Chọn ghế</h3>

      {/* Compact seat grid container with max height */}
      <div className="bg-gradient-to-b from-zinc-50 to-white rounded-xl p-3 border border-zinc-200 max-h-[300px] overflow-y-auto">
        {/* Driver cabin indicator */}
        <div className="text-center mb-4">
          <div className="inline-block px-3 py-1 bg-zinc-100 rounded-full text-xs font-medium text-zinc-600 border border-zinc-200">
            Cabin tài xế
          </div>
        </div>

        {/* Seat grid - flexible columns based on layout config */}
        <div className="space-y-1.5 max-w-fit mx-auto">
          {seatRows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex items-center justify-center gap-1.5"
            >
              {/* Seat column group */}
              <div className="flex gap-1.5 flex-wrap justify-center">
                {row.map((seatNum) => (
                  <SeatButton
                    key={seatNum}
                    seatNum={seatNum}
                    label={getSeatLabel(seatNum)}
                    status={getSeatStatus(seatNum)}
                    onToggle={() => onSeatToggle(`seat-${seatNum}`)}
                    canSelect={canSelectMore || isSeatSelected(`seat-${seatNum}`)}
                    seatSize={layout.seatSize}
                  />
                ))}
              </div>

              {/* Row letter indicator - compact */}
              <div className="text-xs text-zinc-400 font-semibold w-5 text-center flex-shrink-0">
                {String.fromCharCode(65 + rowIdx)}
              </div>
            </div>
          ))}
        </div>

        {/* Info text when max reached */}
        {!canSelectMore && selectedSeats.length > 0 && (
          <p className="text-xs text-emerald-600 mt-4 text-center font-medium">
            ✓ Đã chọn {selectedSeats.length} ghế
          </p>
        )}
      </div>
    </section>
  );
};

/**
 * SeatButton - Compact individual seat button
 * Supports configurable sizing from layout
 */
const SeatButton = ({
  seatNum,
  label,
  status,
  onToggle,
  canSelect,
  seatSize = 'w-8 h-8',
}) => {
  const baseStyles = `${seatSize} rounded-lg font-semibold text-xs transition-all duration-200 border-2 flex items-center justify-center cursor-pointer`;

  let styles = baseStyles;

  if (status === 'selected') {
    styles += ' bg-emerald-500 text-white border-emerald-600 shadow-md scale-105';
  } else if (status === 'booked') {
    styles += ' bg-zinc-300 text-zinc-600 border-zinc-400 cursor-not-allowed opacity-60';
  } else if (canSelect) {
    styles += ' bg-white text-zinc-900 border-zinc-300 hover:border-emerald-500 hover:shadow-sm';
  } else {
    styles += ' bg-zinc-100 text-zinc-500 border-zinc-200 cursor-not-allowed opacity-50';
  }

  return (
    <button
      onClick={onToggle}
      disabled={status === 'booked' || !canSelect}
      className={styles}
      aria-label={`Ghế ${label} - ${
        status === 'selected'
          ? 'Đã chọn'
          : status === 'booked'
            ? 'Đã bán'
            : 'Còn trống'
      }`}
      aria-pressed={status === 'selected'}
      type="button"
    >
      {label}
    </button>
  );
};
