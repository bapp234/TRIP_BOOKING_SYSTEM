import { TripSearchForm } from '@/features/search-trip';
import { HERO_SEARCH_BANNER } from '@/shared/constants';

export const HeroSearchWidget = ({
  imageUrl = HERO_SEARCH_BANNER.imageUrl,
  backgroundPosition = HERO_SEARCH_BANNER.backgroundPosition,
  backgroundSize = HERO_SEARCH_BANNER.backgroundSize,
  overlayClassName = HERO_SEARCH_BANNER.overlayClassName,
  glowClassName = HERO_SEARCH_BANNER.glowClassName,
  titlePrefix = HERO_SEARCH_BANNER.titlePrefix,
  titleAccent = HERO_SEARCH_BANNER.titleAccent,
  titleSuffix = HERO_SEARCH_BANNER.titleSuffix,
  description = HERO_SEARCH_BANNER.description,
} = {}) => {
  return (
    <section className="relative min-h-[70vh] pt-20 lg:pt-24 pb-16 overflow-visible bg-cover bg-center"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition,
        backgroundSize,
      }}
    >
      {/* BACKGROUND OVERLAY - Enhanced gradient */}
      <div aria-hidden className={`absolute inset-0 ${overlayClassName}`} />

      {/* DECORATIVE GLOW */}
      <div aria-hidden className={glowClassName} />

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-12 lg:pt-16 pb-20 lg:pb-28">

        {/* TEXT */}
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            {titlePrefix}
            <span className="text-emerald-400">{titleAccent}</span>
            {titleSuffix}
          </h1>

          <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto font-light">
            {description}
          </p>
        </div>

        {/* FLOATING SEARCH */}
        <div className="absolute left-1/2 -bottom-3/40 md:-bottom-3/4 lg:-bottom-32 -translate-x-1/2 w-full max-w-6xl px-4 ">
          <TripSearchForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSearchWidget;