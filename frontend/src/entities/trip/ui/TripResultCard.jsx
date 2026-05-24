import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdLocationOn, MdEventSeat } from 'react-icons/md';
import { SeatMap, SeatLegend, SelectedSeatsSummary, useSeatSelection } from '@/features/select-seat';
import { TripExpandedDetails } from './TripExpandedDetails';

/**
 * TripResultCard - Trip card with expandable seat selection
 * Features:
 * - Compact view with trip details
 * - Expandable to show seat map and booking form
 * - Direct booking flow without modal
 */
export const TripResultCard = ({ trip }) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Seat selection state
  const {
    selectedSeats,
    toggleSeat,
    isSeatSelected,
    totalPrice,
    canSelectMore,
    seatCount,
  } = useSeatSelection(trip.price, 4);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleContinue = () => {
    if (selectedSeats.length === 0) return;
    
    // Navigate to checkout with selected data
    navigate('/checkout', {
      state: {
        trip,
        selectedSeats: selectedSeats.map((s) => s.id.replace('seat-', '')),
        totalPrice,
      },
    });
  };

  return (
    <article
      className="overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:shadow-md sm:rounded-3xl"
      itemScope
      itemType="https://schema.org/BusTrip"
    >
      {/* Hidden schema.org metadata for SEO */}
      <meta itemProp="departureTime" content={trip.departureTime} />
      <meta itemProp="arrivalTime" content={trip.arrivalTime} />
      <meta itemProp="priceCurrency" content="VND" />
      <meta itemProp="price" content={trip.price} />

      {/* Compact Card View */}
      <div className={`p-4 sm:p-5 lg:p-6 ${isExpanded ? 'border-b border-zinc-200' : ''}`}>
        <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-[minmax(0,1fr)_auto] xl:grid-cols-[140px_minmax(0,1fr)_160px_auto] xl:items-center xl:gap-x-6">
          {/* Operator Section */}
          <div className="flex min-w-0 items-center gap-3 xl:flex-col xl:items-start xl:gap-1.5">
            <div className="shrink-0 text-3xl sm:text-4xl">{trip.operator.logo}</div>
            <div className="min-w-0">
            <h3 className="break-words text-sm font-semibold leading-tight text-zinc-900 xl:text-xs">
              {trip.operator.name}
            </h3>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-sm ${i < Math.floor(trip.operator.rating) ? 'text-amber-500' : 'text-zinc-300'}`}>
                  ★
                </span>
              ))}
              <span className="text-xs text-zinc-600 ml-0.5">{trip.operator.rating}</span>
            </div>
            </div>
          </div>

          {/* Route & Time Section */}
          <div className="flex min-w-0 flex-col gap-1.5 md:col-span-2 xl:col-span-1">
            {/* Departure */}
            <div className="flex items-center gap-2 min-w-0">
              <MdLocationOn className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <time className="text-lg font-bold text-zinc-900 flex-shrink-0">{trip.departureTime}</time>
              <span className="text-zinc-300 flex-shrink-0">·</span>
              <span className="text-xs text-zinc-500 min-w-0 break-words">{trip.pickupPoint}</span>
            </div>

            {/* Duration */}
            <div className="relative flex items-center" style={{ height: '28px' }}>
              <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-zinc-200" />
              <span className="relative ml-7 text-xs text-zinc-400 font-medium bg-white pr-2">
                {trip.duration}
              </span>
            </div>

            {/* Arrival */}
            <div className="flex items-center gap-2 min-w-0">
              <MdLocationOn className="w-4 h-4 text-red-500 flex-shrink-0" />
              <time className="text-lg font-bold text-zinc-900 flex-shrink-0">{trip.arrivalTime}</time>
              <span className="text-zinc-300 flex-shrink-0">·</span>
              <span className="text-xs text-zinc-500 min-w-0 break-words">{trip.dropoffPoint}</span>
            </div>
          </div>

          {/* Bus Type & Seats */}
          <div className="grid min-w-0 grid-cols-2 gap-3 rounded-xl bg-zinc-50 p-3 sm:grid-cols-[minmax(0,1fr)_auto] md:col-span-1 xl:flex xl:flex-col xl:gap-2 xl:bg-transparent xl:p-0">
            <div className="flex min-w-0 items-center gap-2">
              <MdEventSeat
                className={`w-4 h-4 flex-shrink-0 ${trip.seatsLeft < 6 ? 'text-orange-400' : 'text-emerald-500'}`}
              />
              <span className="min-w-0 truncate text-sm font-medium text-zinc-800">{trip.busType}</span>
            </div>
            <div className="flex items-center justify-end gap-1.5 text-sm xl:justify-start">
              <span className={`font-semibold ${trip.seatsLeft < 6 ? 'text-orange-500' : 'text-emerald-600'}`}>
                {trip.seatsLeft}
              </span>
              <span className="text-zinc-400 text-xs">ghế còn</span>
            </div>
            <div className="col-span-2 h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
              <div
                className={`h-full rounded-full transition-all ${trip.seatsLeft < 6 ? 'bg-orange-400' : 'bg-emerald-500'}`}
                style={{ width: `${((trip.totalSeats - trip.seatsLeft) / trip.totalSeats) * 100}%` }}
              />
            </div>
          </div>

          {/* Price & CTA */}
          <div className="flex min-w-0 items-center justify-between gap-3 md:justify-end xl:flex-col xl:items-end">
            <div className="min-w-0 text-left md:text-right">
              <p className="text-xs text-zinc-400 mb-0.5">Giá vé</p>
              <p className="text-lg font-bold text-emerald-600 sm:text-xl">{formatPrice(trip.price)}</p>
            </div>
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="shrink-0 rounded-xl bg-emerald-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-600 hover:shadow-md active:scale-95 sm:min-w-24"
              aria-label={`Chọn chuyến xe từ ${trip.from} đến ${trip.to} lúc ${trip.departureTime}`}
            >
              {isExpanded ? 'Ẩn' : 'Chọn'}
            </button>
          </div>
        </div>
      </div>

      {/* Expanded View - Seat Selection */}
      {isExpanded && (
        <div className="overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="space-y-6 px-4 pb-4 sm:px-5 sm:pb-5 lg:px-6 lg:pb-6">
            {/* Trip Details */}
            <TripExpandedDetails trip={trip} />

            {/* Seat Selection Section */}
            <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)] lg:gap-6">
              {/* Seat Map - Left/Top */}
              <div className="min-w-0 space-y-3">
                <SeatMap
                  trip={trip}
                  selectedSeats={selectedSeats}
                  onSeatToggle={toggleSeat}
                  isSeatSelected={isSeatSelected}
                  canSelectMore={canSelectMore}
                />
                <SeatLegend />
              </div>

              {/* Summary & CTA - Right/Bottom */}
              <div className="flex min-w-0 flex-col gap-4">
                <SelectedSeatsSummary selectedSeats={selectedSeats} totalPrice={totalPrice} seatCount={seatCount} />

                {/* Continue Button */}
                <button
                  type="button"
                  onClick={handleContinue}
                  disabled={seatCount === 0}
                  className={`w-full px-4 py-3 rounded-xl font-semibold transition-all ${
                    seatCount > 0
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-md active:scale-95'
                      : 'bg-zinc-100 text-zinc-400 cursor-not-allowed'
                  }`}
                >
                  Tiếp tục ({seatCount} ghế)
                </button>

                {/* Cancel */}
                <button
                  type="button"
                  onClick={() => setIsExpanded(false)}
                  className="w-full px-4 py-2 text-zinc-900 hover:bg-orange-400 rounded-xl transition-colors text-sm font-medium"
                >
                  Huỷ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};
