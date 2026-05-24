import { useState } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import {
  PRICE_RANGES,
  DEPARTURE_TIMES,
  BUS_TYPES,
  OPERATORS,
} from '@/features/filter-trips';

/**
 * TripFilterSidebar - Filter panel for trip results
 * SEO: Semantic fieldset, proper form elements
 * a11y: Expandable sections with ARIA controls
 */
export const TripFilterSidebar = ({ onFilterChange, filters }) => {
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    time: true,
    type: true,
    operator: false,
    pickup: false,
    dropoff: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handlePriceChange = (range) => {
    onFilterChange?.({
      ...filters,
      priceRange: range,
    });
  };

  const handleTimeChange = (value) => {
    const newTimes = filters.departureTime?.includes(value)
      ? filters.departureTime.filter((t) => t !== value)
      : [...(filters.departureTime || []), value];
    onFilterChange?.({
      ...filters,
      departureTime: newTimes,
    });
  };

  const handleTypeChange = (value) => {
    const newTypes = filters.busType?.includes(value)
      ? filters.busType.filter((t) => t !== value)
      : [...(filters.busType || []), value];
    onFilterChange?.({
      ...filters,
      busType: newTypes,
    });
  };

  const handleOperatorChange = (value) => {
    const newOps = filters.operator?.includes(value)
      ? filters.operator.filter((o) => o !== value)
      : [...(filters.operator || []), value];
    onFilterChange?.({
      ...filters,
      operator: newOps,
    });
  };

  return (
    <aside className="w-full lg:w-72 flex-shrink-0">
      <div className="sticky top-24 space-y-3">
        {/* Price Filter */}
        <FilterSection
          title="Giá vé"
          isExpanded={expandedSections.price}
          onToggle={() => toggleSection('price')}
        >
          <div className="space-y-2">
            {PRICE_RANGES.map((range) => (
              <label
                key={`${range.min}-${range.max}`}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={
                    filters.priceRange?.min === range.min &&    
                    filters.priceRange?.max === range.max
                  }
                  onChange={() => handlePriceChange(range)}
                  className="w-4 h-4 rounded accent-emerald-500 cursor-pointer"
                  aria-label={`Lọc giá ${range.label}`}
                />
                <span className="text-sm text-zinc-700 group-hover:text-zinc-900 transition-colors">
                  {range.label}
                </span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Departure Time Filter */}
        <FilterSection
          title="Giờ khởi hành"
          isExpanded={expandedSections.time}
          onToggle={() => toggleSection('time')}
        >
          <div className="space-y-2">
            {DEPARTURE_TIMES.map((time) => (
              <label
                key={time.value}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={filters.departureTime?.includes(time.value)}
                  onChange={() => handleTimeChange(time.value)}
                  className="w-4 h-4 rounded accent-emerald-500 cursor-pointer"
                  aria-label={`Lọc ${time.label}`}
                />
                <span className="text-sm text-zinc-700 group-hover:text-zinc-900 transition-colors">
                  {time.label}
                </span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Bus Type Filter */}
        <FilterSection
          title="Loại xe"
          isExpanded={expandedSections.type}
          onToggle={() => toggleSection('type')}
        >
          <div className="space-y-2">
            {BUS_TYPES.map((type) => (
              <label
                key={type.value}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={filters.busType?.includes(type.value)}
                  onChange={() => handleTypeChange(type.value)}
                  className="w-4 h-4 rounded accent-emerald-500 cursor-pointer"
                  aria-label={`Lọc ${type.label}`}
                />
                <span className="text-sm text-zinc-700 group-hover:text-zinc-900 transition-colors">
                  {type.label}
                </span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Operator Filter */}
        <FilterSection
          title="Hãng xe"
          isExpanded={expandedSections.operator}
          onToggle={() => toggleSection('operator')}
        >
          <div className="space-y-2">
            {OPERATORS.map((operator) => (
              <label
                key={operator}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={filters.operator?.includes(operator)}
                  onChange={() => handleOperatorChange(operator)}
                  className="w-4 h-4 rounded accent-emerald-500 cursor-pointer"
                  aria-label={`Lọc hãng xe ${operator}`}
                />
                <span className="text-sm text-zinc-700 group-hover:text-zinc-900 transition-colors">
                  {operator}
                </span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Clear Filters */}
        {Object.values(filters).some((v) => v) && (
          <button
            onClick={() =>
              onFilterChange?.({
                priceRange: null,
                departureTime: [],
                busType: [],
                operator: [],
              })
            }
            className="w-full py-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
            aria-label="Xóa tất cả bộ lọc"
          >
            Xóa bộ lọc
          </button>
        )}
      </div>
    </aside>
  );
};

/**
 * FilterSection - Reusable collapsible filter section
 */
const FilterSection = ({ title, isExpanded, onToggle, children }) => {
  return (
    <div className="bg-white rounded-2xl border border-zinc-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-zinc-50 transition-colors"
        aria-expanded={isExpanded}
        aria-controls={`filter-${title}`}
      >
        <h3 className="font-semibold text-sm text-zinc-900">{title}</h3>
        {isExpanded ? (
          <MdExpandLess className="w-5 h-5 text-zinc-400" />
        ) : (
          <MdExpandMore className="w-5 h-5 text-zinc-400" />
        )}
      </button>
      {isExpanded && (
        <div
          id={`filter-${title}`}
          className="px-4 py-3 border-t border-zinc-200 bg-zinc-50"
        >
          {children}
        </div>
      )}
    </div>
  );
};
