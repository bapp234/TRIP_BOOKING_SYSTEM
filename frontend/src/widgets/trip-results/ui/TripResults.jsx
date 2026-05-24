import { useState } from 'react';
import { MdSort } from 'react-icons/md';
import { TripResultCard } from '@/entities/trip';

/**
 * TripResults - Results section with sort options and trip cards
 * SEO: Semantic section with proper heading hierarchy
 * a11y: Proper sorting controls and result count announcement
 */
export const TripResults = ({ trips, filters }) => {
  const [sortBy, setSortBy] = useState('default');

  const sortedTrips = [...trips].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'departure':
        return a.departureTime.localeCompare(b.departureTime);
      case 'rating':
        return b.operator.rating - a.operator.rating;
      default:
        return 0;
    }
  });

  const filteredTrips = sortedTrips.filter((trip) => {
    // Price filter
    if (
      filters.priceRange &&
      (trip.price < filters.priceRange.min ||
        trip.price > filters.priceRange.max)
    ) {
      return false;
    }

    // Departure time filter
    if (
      filters.departureTime &&
      filters.departureTime.length > 0
    ) {
      const hour = parseInt(trip.departureTime.split(':')[0]);
      const matchesTime = filters.departureTime.some((time) => {
        if (time === 'morning') return hour >= 5 && hour < 12;
        if (time === 'afternoon') return hour >= 12 && hour < 18;
        if (time === 'evening') return hour >= 18 || hour < 5;
        return false;
      });
      if (!matchesTime) return false;
    }

    // Bus type filter
    if (filters.busType && filters.busType.length > 0) {
      const tripType = trip.busType.toLowerCase();
      const matchesType = filters.busType.some((type) => {
        if (type === 'seat')
          return tripType.includes('ghế');
        if (type === 'sleeper')
          return tripType.includes('giường');
        if (type === 'limousine')
          return tripType.includes('limousine');
        return false;
      });
      if (!matchesType) return false;
    }

    // Operator filter
    if (filters.operator && filters.operator.length > 0) {
      if (!filters.operator.includes(trip.operator.name)) {
        return false;
      }
    }

    return true;
  });

  return (
    <section className="flex-1">
      {/* Results Header */}
      <div className="bg-white rounded-2xl border border-zinc-200 p-4 md:p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-lg md:text-xl font-bold text-zinc-900">
              Kết quả tìm kiếm
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              Tìm thấy <span className="font-semibold text-zinc-900">{filteredTrips.length}</span> chuyến xe
            </p>
          </div>

          {/* Sort Controls */}
          <div className="flex items-center gap-2">
            <MdSort className="w-5 h-5 text-zinc-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-sm font-medium text-zinc-900 cursor-pointer hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Sắp xếp kết quả"
            >
              <option value="default">Sắp xếp</option>
              <option value="price-low">Giá thấp nhất</option>
              <option value="price-high">Giá cao nhất</option>
              <option value="departure">Khởi hành sớm</option>
              <option value="rating">Đánh giá cao</option>
            </select>
          </div>
        </div>
      </div>

      {/* Trip Cards List */}
      {filteredTrips.length > 0 ? (
        <div className="space-y-4">
          {filteredTrips.map((trip) => (
            <TripResultCard key={trip.id} trip={trip} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-2xl border border-zinc-200 p-12 text-center">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-lg font-semibold text-zinc-900 mb-2">
            Không tìm thấy chuyến xe
          </h3>
          <p className="text-zinc-500 mb-4">
            Vui lòng thay đổi bộ lọc hoặc điều kiện tìm kiếm
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors"
          >
            Làm mới
          </button>
        </div>
      )}
    </section>
  );
};
