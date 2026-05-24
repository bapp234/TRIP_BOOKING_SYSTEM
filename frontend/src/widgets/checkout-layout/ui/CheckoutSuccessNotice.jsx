import { formatPrice } from '@/shared/utils/formatPrice';

export const CheckoutSuccessNotice = ({
  bookingCode,
  customerEmail,
  onBackHome,
  onViewTrips,
  orderTotal,
  selectedMethodName,
}) => (
  <section className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm sm:p-6" role="status">
    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-lg font-bold text-emerald-700"
        aria-hidden="true"
      >
        ✓
      </div>

      <div className="min-w-0 flex-1">
        <h2 className="text-lg font-bold text-zinc-950">Đặt vé thành công!</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-600">
          TripBooking đã ghi nhận yêu cầu đặt vé của bạn. Vé điện tử sẽ được gửi qua email sau khi hệ thống thanh toán
          VNPay/MoMo được kích hoạt. Hiện tại đây là giao dịch mô phỏng.
        </p>

        <dl className="mt-4 grid gap-3 rounded-xl bg-emerald-50 p-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-emerald-800">Mã đặt vé</dt>
            <dd className="mt-1 font-bold text-emerald-950">{bookingCode}</dd>
          </div>
          <div>
            <dt className="text-emerald-800">Phương thức</dt>
            <dd className="mt-1 font-bold text-emerald-950">{selectedMethodName}</dd>
          </div>
          <div>
            <dt className="text-emerald-800">Tổng tiền</dt>
            <dd className="mt-1 font-bold text-emerald-950">{formatPrice(orderTotal)}</dd>
          </div>
          <div>
            <dt className="text-emerald-800">Email khách hàng</dt>
            <dd className="mt-1 break-words font-bold text-emerald-950">{customerEmail || 'Chưa cung cấp'}</dd>
          </div>
        </dl>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onBackHome}
            className="rounded-xl bg-emerald-500 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Về trang chủ
          </button>
          <button
            type="button"
            onClick={onViewTrips}
            className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-center text-sm font-bold text-zinc-800 transition hover:border-emerald-300 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Xem chuyến xe khác
          </button>
        </div>
      </div>
    </div>
  </section>
);
