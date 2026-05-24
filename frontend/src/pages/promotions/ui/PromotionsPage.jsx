import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { CollectPromotionButton, useCollectPromotion } from '@/features/collect-promotion';
import { PromotionCard } from '@/widgets/promotions';
import { FooterWidget } from '@/widgets/footer';
import { PROMOTIONS } from '@/shared/constants/landing-data';

const getPromotionDescription = (promo) =>
  `${promo.title}. ${promo.description} Ưu đãi dành cho hành khách đặt vé xe trên TripBooking.`;

export const PromotionsPage = () => {
  const { promoId } = useParams();
  const selectedPromo = PROMOTIONS.find((promo) => promo.id === promoId);
  const {
    collectedPromotions,
    getPromotionError,
    getPromotionStatus,
    handleCollectPromotion,
  } = useCollectPromotion();
  const pageDescription =
    'Tổng hợp khuyến mãi đặt vé xe trên TripBooking: mã giảm giá, ưu đãi đổi lịch, hoàn tiền và quà tặng cho hành khách.';

  return (
    <>
      <Helmet>
        <title>Khuyến mãi đặt vé xe | TripBooking</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tripbooking.com/khuyen-mai" />
        <meta property="og:title" content="Khuyến mãi đặt vé xe | TripBooking" />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tripbooking.com/khuyen-mai" />
        <meta property="og:site_name" content="TripBooking" />
      </Helmet>

      <main className="min-h-screen bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-20">
          <section className="mb-10 rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-emerald-50 p-6 md:p-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-orange-600">
              Ưu đãi TripBooking
            </p>
            <h1 className="text-3xl font-black tracking-tight text-zinc-950 md:text-5xl">
              Khuyến mãi đặt vé xe
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-700 md:text-lg">
              Khám phá các mã ưu đãi đặt vé xe khách, chương trình giảm giá theo tuyến đường, ưu đãi đổi lịch và quyền
              lợi hội viên. Chọn ưu đãi phù hợp, xem điều kiện áp dụng và lấy mã trước khi hoàn tất đặt vé.
            </p>
          </section>


          {selectedPromo && (
            <section className="mb-10 rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm md:p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-emerald-600">Ưu đãi đang xem</p>
                  <h2 className="mt-2 text-2xl font-bold text-zinc-950">{selectedPromo.title}</h2>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-600">
                    {getPromotionDescription(selectedPromo)}
                  </p>
                  {selectedPromo.validity && (
                    <p className="mt-3 text-sm font-semibold text-zinc-700">Hạn áp dụng: {selectedPromo.validity}</p>
                  )}
                </div>
                <div className="w-full shrink-0 md:w-48">
                  <CollectPromotionButton
                    promo={selectedPromo}
                    status={getPromotionStatus(selectedPromo)}
                    onCollect={handleCollectPromotion}
                  />
                  {getPromotionStatus(selectedPromo) === 'collected' && (
                    <p className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700" role="status">
                      Mã đã được lưu vào kho ưu đãi cá nhân.
                    </p>
                  )}
                  {getPromotionStatus(selectedPromo) === 'unavailable' && (
                    <p className="mt-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700" role="alert">
                      {getPromotionError(selectedPromo.id)}
                    </p>
                  )}
                </div>
              </div>
            </section>
          )}

          <section aria-labelledby="promotion-list-title">
            <div className="mb-6">
              <h2 id="promotion-list-title" className="text-2xl font-bold text-zinc-950 md:text-3xl">
                Danh sách ưu đãi
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Các chương trình bên dưới giúp hành khách đặt vé xe tiết kiệm hơn. Mỗi ưu đãi có điều kiện áp dụng
                riêng, phù hợp cho từng hành trình, nhóm khách hoặc thời điểm khởi hành.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {PROMOTIONS.map((promo, index) => (
                <PromotionCard
                  key={promo.id}
                  promo={promo}
                  index={index}
                  ctaLabel="Lấy mã"
                  collectError={getPromotionError(promo.id)}
                  collectStatus={getPromotionStatus(promo)}
                  onCollect={handleCollectPromotion}
                />
              ))}
            </div>
          </section>
        </div>
        <FooterWidget />
      </main>
    </>
  );
};
