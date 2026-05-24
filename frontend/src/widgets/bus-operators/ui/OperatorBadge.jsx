import React from 'react';
import { FaStar } from 'react-icons/fa6';

/**
 * OperatorBadge Component
 * 
 * Displays a bus operator card with image, info, rating, and trips
 * Horizontal layout with blend colors (white, orange, emerald)
 */
export const OperatorBadge = ({ operator }) => {
  // Color mapping
  const accentColorMap = {
    emerald: 'from-emerald-100/60 to-emerald-50/30',
    amber: 'from-amber-100/60 to-orange-50/30',
    orange: 'from-orange-100/60 to-orange-50/30',
    rose: 'from-rose-100/60 to-rose-50/30',
    blue: 'from-blue-100/60 to-blue-50/30',
  };

  const borderColorMap = {
    emerald: 'hover:border-emerald-300',
    amber: 'hover:border-amber-300',
    orange: 'hover:border-orange-300',
    rose: 'hover:border-rose-300',
    blue: 'hover:border-blue-300',
  };

  const bgGradient = accentColorMap[operator.accentColor] || accentColorMap.emerald;
  const borderHover = borderColorMap[operator.accentColor] || borderColorMap.emerald;

  return (
    <article
      aria-labelledby={`operator-${operator.id}-title`}
      className={`relative h-full overflow-hidden rounded-2xl border border-white/80 bg-gradient-to-br ${bgGradient} shadow-sm transition-all duration-300 hover:-translate-y-1 ${borderHover} hover:shadow-lg group`}
    >
      {/* Background accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-60" />

      {/* Image - top half */}
      <div className="relative h-32 overflow-hidden bg-gradient-to-b from-white to-white/60">
        <img
          src={operator.image}
          alt={`${operator.name} bus image`}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
        />
        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40" />

        {/* Rating badge - top right */}
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm">
          <FaStar className="text-amber-400 text-xs" aria-hidden />
          <span className="text-xs font-bold text-zinc-900">{operator.rating}</span>
        </div>
      </div>

      {/* Info - bottom half */}
      <div className="p-4">
        {/* Logo placeholder + Name */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-white/80 flex items-center justify-center font-bold text-xs text-zinc-700 shadow-sm">
            {operator.logo}
          </div>
          <h3
            id={`operator-${operator.id}-title`}
            className="font-bold text-sm text-zinc-950 truncate"
          >
            {operator.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs leading-5 text-zinc-700 line-clamp-2 mb-2">
          {operator.description}
        </p>

        {/* Trips count */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 px-2 py-1 rounded-full">
            {operator.trips}+ chuyến
          </span>
        </div>
      </div>
    </article>
  );
};

export default OperatorBadge;
