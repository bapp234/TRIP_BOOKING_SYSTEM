import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { OrderSummary, SERVICE_FEE } from '@/entities/booking';
import { PassengerInfoForm } from '@/features/passenger-info';
import { getPaymentMethodName, PaymentMethods } from '@/features/payment-method';
import {
  BookingSteps,
  CheckoutHeader,
  CheckoutSuccessNotice,
  SecurityNotice,
} from '@/widgets/checkout-layout';

const BOOKING_CODE = 'TBK-2026-001';

const getSeatLabel = (seat) => {
  if (typeof seat === 'string') return seat;
  return seat?.id?.replace('seat-', '') || seat?.label || 'Ghế';
};

const CheckoutSeo = () => (
  <Helmet>
    <title>Thanh toán vé xe | TripBooking</title>
    <meta
      name="description"
      content="Kiểm tra thông tin đặt vé xe, chọn phương thức thanh toán và hoàn tất đặt vé trên TripBooking."
    />
    <meta name="robots" content="noindex, nofollow" />
  </Helmet>
);

export const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { trip, selectedSeats = [], totalPrice, discountAmount = 0, selectedOffer } = location.state || {};
  const [selectedMethod, setSelectedMethod] = useState('vnpay');
  const [isSuccess, setIsSuccess] = useState(false);
  const [passenger, setPassenger] = useState({
    name: '',
    phone: '',
    email: '',
    note: '',
  });

  const normalizedSeats = useMemo(() => selectedSeats.map(getSeatLabel), [selectedSeats]);

  const pricing = useMemo(() => {
    const seatCount = normalizedSeats.length || 1;
    const baseTotal = Number(totalPrice) || (Number(trip?.price) || 0) * seatCount;
    const safeDiscount = Math.max(0, Number(discountAmount) || 0);
    const orderTotal = Math.max(0, baseTotal + SERVICE_FEE - safeDiscount);

    return {
      seatCount,
      baseTotal,
      serviceFee: SERVICE_FEE,
      discountAmount: safeDiscount,
      offerCode: selectedOffer?.code,
      orderTotal,
    };
  }, [discountAmount, normalizedSeats.length, selectedOffer?.code, totalPrice, trip?.price]);

  const selectedMethodName = useMemo(
    () => getPaymentMethodName(selectedMethod),
    [selectedMethod],
  );

  const handlePassengerChange = (event) => {
    const { name, value } = event.target;
    setPassenger((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = () => {
    setIsSuccess(true);
  };

  if (!trip) {
    return (
      <>
        <CheckoutSeo />

        <main className="min-h-screen bg-zinc-50 px-4 py-8">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-sm">
              <h1 className="text-2xl font-bold text-zinc-950">Không tìm thấy dữ liệu chuyến xe</h1>
              <p className="mt-2 text-sm text-zinc-600">
                Vui lòng quay lại danh sách chuyến để chọn ghế trước khi thanh toán.
              </p>
              <button
                type="button"
                onClick={() => navigate('/chuyen-xe')}
                className="mt-6 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Quay lại danh sách
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <CheckoutSeo />

      <main className="min-h-screen bg-zinc-50 px-4 py-6 sm:py-8">
        <div className="mx-auto max-w-6xl">
          <CheckoutHeader onBack={() => navigate('/chuyen-xe')} />

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
            <div className="space-y-5 sm:space-y-6">
              <BookingSteps />
              {isSuccess && (
                <CheckoutSuccessNotice
                  bookingCode={BOOKING_CODE}
                  customerEmail={passenger.email}
                  onBackHome={() => navigate('/')}
                  onViewTrips={() => navigate('/chuyen-xe')}
                  orderTotal={pricing.orderTotal}
                  selectedMethodName={selectedMethodName}
                />
              )}
              <PassengerInfoForm passenger={passenger} onChange={handlePassengerChange} />
              <PaymentMethods selectedMethod={selectedMethod} onSelect={setSelectedMethod} />
              <SecurityNotice />
            </div>

            <OrderSummary
              trip={trip}
              selectedSeats={normalizedSeats}
              pricing={pricing}
              onSubmit={handleSubmit}
              isSuccess={isSuccess}
            />
          </div>
        </div>
      </main>
    </>
  );
};
