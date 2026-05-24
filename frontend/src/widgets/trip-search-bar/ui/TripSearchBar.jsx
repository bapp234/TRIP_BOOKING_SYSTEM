import { useState } from 'react';
import {
  FaBus,
  FaCar,
  FaExchangeAlt,
  FaMapMarkerAlt,
  FaPlane,
  FaRegCalendarAlt,
  FaSearch,
} from 'react-icons/fa';
import { RiTrainFill } from 'react-icons/ri';

const VEHICLE_TYPES = [
  { value: 'bus', label: 'Xe khách', icon: FaBus },
  { value: 'plane', label: 'Máy bay', icon: FaPlane },
  { value: 'train', label: 'Tàu hỏa', icon: RiTrainFill },
  { value: 'car', label: 'Thuê xe', icon: FaCar },
];

/**
 * TripSearchBar - Compact search form for the trips listing page
 * SEO: Semantic form with proper labels and input types
 * a11y: ARIA labels, proper label associations
 */
export const TripSearchBar = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departureDate: new Date().toISOString().split('T')[0],
    vehicleType: 'bus',
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSwapLocations = () => {
    setFormData((prev) => ({
      ...prev,
      from: prev.to,
      to: prev.from,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(formData);
  };

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      aria-label="Form tìm chuyến xe"
      className="w-full"
    >
      <div className="bg-white rounded-[24px] border-2 border-black shadow-xl overflow-visible p-3 md:p-4 lg:p-5">
        <div className="flex flex-col gap-4">
          {/* Vehicle Type Selector */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3 pb-2 border-b border-gray-100">
            {VEHICLE_TYPES.map(({ value, label, icon: Icon }) => {
              const isActive = formData.vehicleType === value;

              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => handleChange('vehicleType', value)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-orange-50 text-orange-600 border border-orange-200'
                      : 'bg-gray-50 text-gray-600 border border-transparent hover:bg-gray-100'
                  }`}
                >
                  <Icon className="text-base" aria-hidden />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_minmax(180px,220px)_auto] gap-3 items-end">
            {/* From input */}
            <div className="flex flex-col">
              <label htmlFor="from" className="text-xs text-gray-400 mb-1">
                Điểm đi
              </label>
              <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3 focus-within:border-green-400 focus-within:ring-4 focus-within:ring-green-400/10 transition-colors">
                <FaMapMarkerAlt className="text-blue-600 text-lg" aria-hidden />
                <input
                  id="from"
                  name="from"
                  type="text"
                  placeholder="Điểm đi"
                  value={formData.from}
                  onChange={(event) => handleChange('from', event.target.value)}
                  className="w-full outline-none text-base bg-transparent"
                  aria-label="Điểm khởi hành"
                />
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex items-center justify-center lg:pb-1">
              <button
                type="button"
                onClick={handleSwapLocations}
                aria-label="Hoán đổi điểm đi và điểm đến"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-green-200 bg-white text-green-500 shadow-sm transition-all hover:bg-green-100 hover:border-green-300 hover:scale-105"
              >
                <FaExchangeAlt className="text-base" aria-hidden />
              </button>
            </div>

            {/* To input */}
            <div className="flex flex-col">
              <label htmlFor="to" className="text-xs text-gray-400 mb-1">
                Điểm đến
              </label>
              <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3 focus-within:border-green-400 focus-within:ring-4 focus-within:ring-green-400/10 transition-colors">
                <FaMapMarkerAlt className="text-red-600 text-lg" aria-hidden />
                <input
                  id="to"
                  name="to"
                  type="text"
                  placeholder="Điểm đến"
                  value={formData.to}
                  onChange={(event) => handleChange('to', event.target.value)}
                  className="w-full outline-none text-base bg-transparent"
                  aria-label="Điểm đến"
                />
              </div>
            </div>

            {/* Date input */}
            <div className="flex flex-col">
              <label htmlFor="date" className="text-xs text-gray-400 mb-1">
                Ngày đi
              </label>
              <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-3 py-2 md:px-4 md:py-3 focus-within:border-green-400 focus-within:ring-4 focus-within:ring-green-400/10 transition-colors">
                <FaRegCalendarAlt
                  className="shrink-0 text-black text-lg"
                  aria-hidden
                />
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.departureDate}
                  onChange={(event) => handleChange('departureDate', event.target.value)}
                  className="w-full min-w-0 appearance-none outline-none text-base bg-transparent"
                  aria-label="Ngày khởi hành"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-full lg:w-auto self-stretch flex items-end">
              <button
                type="submit"
                aria-label="Tìm chuyến xe"
                className="w-full lg:w-auto h-[52px] flex items-center justify-center gap-3 px-6 rounded-2xl bg-green-400 text-black font-bold text-base shadow-md transition-transform transform hover:-translate-y-0.5 hover:scale-[1.01]"
              >
                <FaSearch className="text-lg" aria-hidden />
                <span>Tìm chuyến xe</span>
              </button>
            </div>
          </div>

          <input type="hidden" name="vehicleType" value={formData.vehicleType} />
        </div>
      </div>
    </form>
  );
};

