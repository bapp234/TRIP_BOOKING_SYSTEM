import { TRUST_STATS } from '@/shared/constants/landing-data';

export const TrustStatsSection = () => {
  return (
    <section className="border-y border-zinc-400 bg-gradient-to-b from-emerald-100 to-zinc-100 py-72 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          {/* INTRO TEXT */}
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              Trust at scale
            </p>
            <h2 className="text-3xl font-black leading-[1.08] tracking-tight text-zinc-950 sm:text-4xl md:text-5xl">
              TripBooking giúp hành khách so sánh chuyến xe, chọn giờ đi phù hợp và đặt vé nhanh chóng trên hàng trăm tuyến đường toàn quốc.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 md:text-lg">
              Những con số này phản ánh trải nghiệm thực tế của hành khách, mạng lưới vận hành và mức độ hỗ trợ mà TripBooking đang duy trì mỗi ngày.
            </p>
          </div>

          {/* STATS GRID */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
            {TRUST_STATS.map((stat, index) => {
              const isAccentCard = index === 0;

              return (
                <article
                  key={stat.id}
                  className={`group rounded-2xl border border-transparent bg-white/80 p-5 text-left shadow-[0_1px_2px_rgba(15,23,42,0.04)] backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] ${
                    isAccentCard ? 'bg-gradient-to-br from-white to-emerald-50/60' : ''
                  }`}
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 transition-colors group-hover:bg-emerald-100">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                  </div>

                  <div className="text-5xl font-black leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600 sm:text-6xl">
                    {stat.value}
                  </div>

                  <h3 className="mt-4 text-sm font-semibold text-zinc-900">
                    {stat.label}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-zinc-500">
                    {stat.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStatsSection;
