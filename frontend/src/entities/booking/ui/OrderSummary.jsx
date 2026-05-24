import { formatPrice } from '@/shared/utils/formatPrice';

export const OrderSummary = ({ trip, selectedSeats, pricing, onSubmit, isSuccess }) => (
  <aside className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">
    <div className="mb-5 flex items-start justify-between gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Tóm tắt đơn hàng</p>
        <h2 className="mt-1 text-lg font-bold text-zinc-950">{trip.operator?.name}</h2>
      </div>
      {trip.operator?.logo && <div className="text-3xl" aria-hidden="true">{trip.operator.logo}</div>}
    </div>

    <div className="space-y-5">
      <div className="rounded-xl bg-zinc-50 p-4">
        <p className="font-semibold text-zinc-950">{trip.from} → {trip.to}</p>
        <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-zinc-500">Giờ đi</p>
            <p className="font-semibold text-zinc-900">{trip.departureTime}</p>
          </div>
          <div>
            <p className="text-zinc-500">Giờ đến</p>
            <p className="font-semibold text-zinc-900">{trip.arrivalTime}</p>
          </div>
          <div className="col-span-2">
            <p className="text-zinc-500">Thời lượng</p>
            <p className="font-semibold text-zinc-900">{trip.duration}</p>
          </div>
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold text-zinc-800">Ghế đã chọn</p>
        <div className="flex flex-wrap gap-2">
          {selectedSeats.map((seat) => (
            <span
              key={seat}
              className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700"
            >
              {seat}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3 border-t border-zinc-200 pt-4 text-sm">
        <div className="flex items-center justify-between gap-4">
          <span className="text-zinc-600">Giá / ghế</span>
          <span className="font-semibold text-zinc-900">{formatPrice(trip.price)}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-zinc-600">Số lượng ghế</span>
          <span className="font-semibold text-zinc-900">{pricing.seatCount} ghế</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-zinc-600">Tạm tính</span>
          <span className="font-semibold text-zinc-900">{formatPrice(pricing.baseTotal)}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-zinc-600">Phí dịch vụ mô phỏng</span>
          <span className="font-semibold text-zinc-900">{formatPrice(pricing.serviceFee)}</span>
        </div>
        {pricing.discountAmount > 0 && (
          <div className="flex items-center justify-between gap-4 text-emerald-700">
            <span>Giảm giá {pricing.offerCode ? `(${pricing.offerCode})` : ''}</span>
            <span className="font-semibold">-{formatPrice(pricing.discountAmount)}</span>
          </div>
        )}
      </div>

      <div className="border-t border-zinc-200 pt-4">
        <div className="flex items-end justify-between gap-4">
          <span className="font-bold text-zinc-950">Tổng cộng</span>
          <span className="text-2xl font-bold text-emerald-600">{formatPrice(pricing.orderTotal)}</span>
        </div>
        <p className="mt-1 text-xs text-zinc-500">Đã bao gồm phí mô phỏng, chưa phát sinh giao dịch thật.</p>
      </div>

      <button
        type="button"
        onClick={onSubmit}
        disabled={isSuccess}
        className="w-full rounded-xl bg-emerald-500 px-5 py-3.5 text-center font-bold text-white transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-emerald-300"
      >
        {isSuccess ? 'Đã ghi nhận đặt vé' : 'Tiếp tục thanh toán'}
      </button>
    </div>
  </aside>
);
