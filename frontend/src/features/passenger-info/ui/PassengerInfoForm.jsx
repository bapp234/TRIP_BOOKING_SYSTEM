export const PassengerInfoForm = ({ passenger, onChange }) => (
  <section className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6">
    <div className="mb-5">
      <h2 className="text-lg font-bold text-zinc-950">Thông tin hành khách</h2>
      <p className="mt-1 text-sm text-zinc-500">Nhà xe sẽ dùng thông tin này để xác nhận vé.</p>
    </div>

    <div className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label htmlFor="passengerName" className="mb-1.5 block text-sm font-semibold text-zinc-800">
          Họ và tên
        </label>
        <input
          id="passengerName"
          name="name"
          type="text"
          autoComplete="name"
          value={passenger.name}
          onChange={onChange}
          className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          placeholder="Nguyễn Văn A"
        />
      </div>

      <div>
        <label htmlFor="passengerPhone" className="mb-1.5 block text-sm font-semibold text-zinc-800">
          Số điện thoại
        </label>
        <input
          id="passengerPhone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={passenger.phone}
          onChange={onChange}
          className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          placeholder="0901234567"
        />
      </div>

      <div>
        <label htmlFor="passengerEmail" className="mb-1.5 block text-sm font-semibold text-zinc-800">
          Email
        </label>
        <input
          id="passengerEmail"
          name="email"
          type="email"
          autoComplete="email"
          value={passenger.email}
          onChange={onChange}
          className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          placeholder="email@example.com"
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="passengerNote" className="mb-1.5 block text-sm font-semibold text-zinc-800">
          Ghi chú cho nhà xe
        </label>
        <textarea
          id="passengerNote"
          name="note"
          rows={4}
          value={passenger.note}
          onChange={onChange}
          className="w-full resize-none rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          placeholder="Ví dụ: cần hỗ trợ hành lý hoặc đón đúng điểm hẹn"
        />
      </div>
    </div>
  </section>
);
