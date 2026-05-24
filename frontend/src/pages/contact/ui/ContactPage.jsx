import { Helmet } from 'react-helmet-async';
import { ContactForm } from '@/features/contact-form';
import { ContactFaqWidget } from '@/widgets/contact-faq';
import { ContactHeroWidget } from '@/widgets/contact-hero';
import { ContactInfoWidget } from '@/widgets/contact-info';
import { FooterWidget } from '@/widgets/footer';

const pageDescription =
  'Liên hệ TripBooking để được hỗ trợ đặt vé xe khách, đổi lịch, thanh toán và giải đáp thắc mắc về chuyến xe.';

export const ContactPage = () => (
  <>
    <Helmet>
      <title>Liên hệ hỗ trợ đặt vé xe | TripBooking</title>
      <meta name="description" content={pageDescription} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://tripbooking.com/lien-he" />
      <meta property="og:title" content="Liên hệ hỗ trợ đặt vé xe | TripBooking" />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://tripbooking.com/lien-he" />
      <meta property="og:site_name" content="TripBooking" />
    </Helmet>

    <main className="min-h-screen bg-zinc-50">
      <ContactHeroWidget />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start lg:py-14" aria-label="Gửi yêu cầu và thông tin liên hệ">
        <ContactForm />
        <ContactInfoWidget />
      </section>

      <ContactFaqWidget />
    </main>
    <FooterWidget />
  </>
);
