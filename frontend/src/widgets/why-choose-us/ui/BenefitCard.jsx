import React from 'react';
import {
  FaLock,
  FaRocket,
  FaHeadset,
  FaBus,
} from 'react-icons/fa6';
import { AnimatedCard } from '@/shared/ui';

const iconMap = {
  FaLock,
  FaRocket,
  FaHeadset,
  FaBus,
};

/**
 * BenefitCard Component
 * 
 * Displays a single benefit with icon, title, and description
 * Used in WhyChooseUs section with proper SEO structure
 */
export const BenefitCard = ({ benefit, index }) => {
  const IconComponent = iconMap[benefit.icon];

  return (
    <AnimatedCard
      animation="fadeInUp"
      delay={index + 1}
      className="w-full rounded-[24px] overflow-hidden"
    >
      <article
        className="group relative h-full rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/80 to-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
      >
        {/* Accent line top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-emerald-500 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Icon Container */}
        <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white border border-emerald-100 group-hover:border-emerald-300 group-hover:bg-emerald-50 transition-all duration-300 shadow-sm">
          {IconComponent && (
            <IconComponent className="text-emerald-600 text-xl group-hover:scale-110 transition-transform duration-300" aria-hidden />
          )}
        </div>

        {/* Title - SEO optimized */}
        <h3 className="text-lg font-bold text-zinc-950 mb-3 leading-snug">
          {benefit.title}
        </h3>

        {/* Description - crawlable */}
        <p className="text-sm leading-6 text-zinc-700 line-clamp-4">
          {benefit.description}
        </p>

        {/* Index indicator (subtle) */}
        <div className="mt-4 inline-flex items-center gap-2">
          <span className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
            Lợi ích {index + 1}
          </span>
        </div>
      </article>
    </AnimatedCard>
  );
};

export default BenefitCard;
