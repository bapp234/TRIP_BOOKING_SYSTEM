import { AnimatedCard } from '@/shared/ui';
import { CollectPromotionButton } from '@/features/collect-promotion';

const accentColorMap = {
  emerald: 'from-emerald-50 to-emerald-100 border-emerald-200 hover:border-emerald-400',
  orange: 'from-orange-50 to-orange-100 border-orange-200 hover:border-orange-400',
  amber: 'from-amber-50 to-amber-100 border-amber-200 hover:border-amber-400',
  rose: 'from-rose-50 to-rose-100 border-rose-200 hover:border-rose-400',
  blue: 'from-blue-50 to-blue-100 border-blue-200 hover:border-blue-400',
  teal: 'from-teal-50 to-teal-100 border-teal-200 hover:border-teal-400',
};

const accentButtonMap = {
  emerald: 'bg-emerald-600 hover:bg-emerald-700',
  orange: 'bg-orange-600 hover:bg-orange-700',
  amber: 'bg-amber-600 hover:bg-amber-700',
  rose: 'bg-rose-600 hover:bg-rose-700',
  blue: 'bg-blue-600 hover:bg-blue-700',
  teal: 'bg-teal-600 hover:bg-teal-700',
};

const accentBadgeMap = {
  emerald: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
  orange: 'bg-orange-100 text-orange-700 border border-orange-200',
  amber: 'bg-amber-100 text-amber-700 border border-amber-200',
  rose: 'bg-rose-100 text-rose-700 border border-rose-200',
  blue: 'bg-blue-100 text-blue-700 border border-blue-200',
  teal: 'bg-teal-100 text-teal-700 border border-teal-200',
};

export const PromotionCard = ({
  promo,
  index = 0,
  ctaLabel = 'Thu thập mã',
  collectError = '',
  collectStatus = 'idle',
  onCollect,
}) => {
  const gradientClasses = accentColorMap[promo.accentColor] || accentColorMap.emerald;
  const buttonClasses = accentButtonMap[promo.accentColor] || accentButtonMap.emerald;
  const badgeClasses = accentBadgeMap[promo.accentColor] || accentBadgeMap.emerald;
  const promoHref = promo.id ? `/khuyen-mai/${promo.id}` : '/khuyen-mai';
  const isCollected = collectStatus === 'collected';
  const isUnavailable = collectStatus === 'unavailable';

  return (
    <AnimatedCard
      animation="slideInLeft"
      delay={index + 1}
      className="w-full rounded-[24px] overflow-hidden"
    >
      <article
        className={`relative overflow-hidden rounded-[24px] bg-gradient-to-br ${gradientClasses} border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 md:p-8 group h-full flex flex-col`}
      >
        {/* DECORATIVE BLUR CIRCLE */}
        <div
          className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
          style={{
            background:
              promo.accentColor === 'emerald'
                ? '#10b981'
                : promo.accentColor === 'orange'
                  ? '#f97316'
                  : promo.accentColor === 'amber'
                    ? '#b45309'
                    : promo.accentColor === 'rose'
                      ? '#e11d48'
                      : promo.accentColor === 'blue'
                        ? '#2563eb'
                        : '#14b8a6',
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* BADGE & DISCOUNT */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              {isCollected ? (
                <div className="inline-block rounded-lg border border-emerald-200 bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                  Đã lưu
                </div>
              ) : promo.badge && (
                <div className={`inline-block ${badgeClasses} px-3 py-1 rounded-lg text-xs font-bold mb-3`}>
                  {promo.badge}
                </div>
              )}
            </div>

            {(promo.discount || promo.bonus) && (
              <div className="ml-4 flex-shrink-0 text-right">
                <div
                  className={`text-3xl md:text-4xl font-black ${promo.accentColor === 'emerald'
                      ? 'text-emerald-600'
                      : promo.accentColor === 'orange'
                        ? 'text-orange-600'
                        : promo.accentColor === 'amber'
                          ? 'text-amber-600'
                          : promo.accentColor === 'rose'
                            ? 'text-rose-600'
                            : promo.accentColor === 'blue'
                              ? 'text-blue-600'
                              : 'text-teal-600'
                    }`}
                >
                  {promo.discount || promo.bonus}
                </div>
              </div>
            )}
          </div>

          {/* TITLE */}
          <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2 line-clamp-2">{promo.title}</h3>

          {/* DESCRIPTION */}
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 flex-grow">{promo.description}</p>

          {/* PROMOTION ACCESS & VALIDITY */}
          <div className="space-y-3 mb-6 pb-4 border-t border-gray-200/50">
            {promo.code && (
              <div className="flex items-center gap-2 pt-3">
                <span className="text-xs font-semibold text-gray-600">Ưu đãi:</span>
                {isCollected ? (
                  <code className="rounded bg-white/70 px-2 py-1 font-mono text-sm font-bold text-gray-900">
                    Mã: {promo.code}
                  </code>
                ) : (
                  <span className="rounded px-2 py-1 text-sm font-bold text-gray-900">
                    Nhận mã để sử dụng khi thanh toán
                  </span>
                )}
              </div>
            )}
            {promo.validity && (
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-gray-600">Hạn:</span>
                <span className="text-xs text-gray-700">{promo.validity}</span>
              </div>
            )}
          </div>

          {onCollect ? (
            <>
              <CollectPromotionButton promo={promo} status={collectStatus} onCollect={onCollect} />

              {isUnavailable && collectError && (
                <p className="mt-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700" role="alert">
                  {collectError}
                </p>
              )}
            </>
          ) : (
            <a
              href={promoHref}
              className={`w-full rounded-lg px-4 py-2.5 text-center font-semibold text-white transition-all duration-300 hover:shadow-md ${buttonClasses}`}
              aria-label={`Thu thập mã ưu đãi ${promo.title}`}
            >
              {ctaLabel}
            </a>
          )}
        </div>
      </article>
    </AnimatedCard>
  );
};

export default PromotionCard;
