import { HeroSearchWidget } from '@/widgets/hero-search';
import { PopularRoutesWidget } from '@/widgets/popular-routes';
import { TrustStatsSection } from '@/widgets/trust-stats';
import { WhyChooseUsWidget } from '@/widgets/why-choose-us';
import { BusOperatorsWidget } from '@/widgets/bus-operators';
import { PromotionsWidget } from '@/widgets/promotions';
import { MobileAppCtaWidget } from '@/widgets/mobile-app-cta';
import { FaqWidget } from '@/widgets/faq';
import { FooterWidget } from '@/widgets/footer';

export const HomePage = () => {
  return (
    <main className="bg-white">
      {/* 1. HERO SEARCH - Large visual anchor */}
      <HeroSearchWidget />

      {/* 2. TRUST STATS - Compact, rhythm break */}
      <TrustStatsSection />

      {/* 3. POPULAR ROUTES - Featured highlight, larger section */}
      <PopularRoutesWidget />

      {/* 4. WHY CHOOSE US - Editorial split, medium spacing */}
      <WhyChooseUsWidget />
ss
      {/* 5. BUS OPERATORS - Compact section */}
      <BusOperatorsWidget />

      {/* 6. PROMOTIONS - Prominent CTA section */}
      <PromotionsWidget />

      {/* 7. MOBILE APP CTA - Large visual call */}
      <MobileAppCtaWidget />

      {/* 8. FAQ - Content-focused section */}
      <FaqWidget />

      {/* 9. FOOTER */}
      <FooterWidget />
    </main>
  );
};

export default HomePage;