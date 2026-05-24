import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { TripSearchBar } from '@/widgets/trip-search-bar';
import { TripFilterSidebar } from '@/widgets/trip-filter-sidebar';
import { TripResults } from '@/widgets/trip-results';
import { FooterWidget } from '@/widgets/footer';
import { MOCK_TRIPS } from '@/shared/constants/trip-data';

/**
 * TripsPage - Main page for searching and browsing trips
 * Route: /chuyen-xe
 * 
 * SEO: Full semantic HTML with proper heading hierarchy,
 * schema.org markup, meta tags
 * 
 * a11y: ARIA labels, semantic landmarks (main, section, aside)
 */
export const TripsPage = () => {
    const [filters, setFilters] = useState({
        priceRange: null,
        departureTime: [],
        busType: [],
        operator: [],
    });

    return (
        <>
            {/* SEO Meta Tags */}
            <Helmet>
                <title>Đặt vé xe khách online | Tìm chuyến xe giá tốt - TripBooking</title>

                <meta
                    name="description"
                    content="Tìm kiếm và đặt vé xe khách online trên TripBooking. So sánh giá vé, giờ khởi hành, hãng xe và chọn chuyến xe phù hợp cho hành trình của bạn."
                />

                <meta name="robots" content="index, follow" />

                <link rel="canonical" href="https://tripbooking.com/chuyen-xe" />

                <meta property="og:title" content="Đặt vé xe khách online | TripBooking" />
                <meta
                    property="og:description"
                    content="So sánh giá vé, giờ khởi hành và đặt vé xe khách nhanh chóng trên TripBooking."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://tripbooking.com/chuyen-xe" />
                <meta property="og:site_name" content="TripBooking" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebPage',
                        name: 'Đặt vé xe khách online',
                        description:
                            'Tìm kiếm và đặt vé xe khách online, so sánh giá vé, giờ khởi hành và hãng xe trên TripBooking.',
                        url: 'https://tripbooking.com/chuyen-xe',
                        isPartOf: {
                            '@type': 'WebSite',
                            name: 'TripBooking',
                            url: 'https://tripbooking.com',
                        },
                    })}
                </script>
            </Helmet>

            <main className="min-h-screen bg-zinc-50">
                <div className="max-w-7xl mx-auto px-4 py-20 md:py-20">
                    {/* Page Title */}
                    <div className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">
                            Tìm kiếm chuyến xe
                        </h1>
                        <p className="text-zinc-600">
                            Tìm chuyến xe khách phù hợp với bạn từ TP.HCM đến Đà Nẵng
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="mb-10">
                        <TripSearchBar onSearch={(data) => console.log('Search:', data)} />
                    </div>

                    {/* Main Content - Sidebar + Results */}
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar */}
                        <TripFilterSidebar filters={filters} onFilterChange={setFilters} />

                        {/* Results */}
                        <TripResults trips={MOCK_TRIPS} filters={filters} />
                    </div>

                    {/* CTA Section */}
                    <section className="mt-16 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl border border-emerald-200 p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3">
                            Không tìm thấy chuyến xe bạn muốn?
                        </h2>
                        <p className="text-zinc-600 mb-6">
                            Liên hệ với chúng tôi để được hỗ trợ tìm chuyến xe phù hợp nhất
                        </p>
                        <button className="px-8 py-3 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-600 transition-colors">
                           <a href="/lien-he">Liên hệ hỗ trợ</a>
                        </button>
                    </section>
                </div>
                <FooterWidget />
            </main>
        </>
    );
};
