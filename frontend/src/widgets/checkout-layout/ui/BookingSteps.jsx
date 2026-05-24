const steps = ['Chọn chuyến', 'Chọn ghế', 'Thanh toán'];

export const BookingSteps = () => (
  <section className="rounded-2xl border border-zinc-200 bg-white p-4 sm:p-5" aria-label="Tiến trình đặt vé">
    <div className="grid grid-cols-3 gap-2">
      {steps.map((step, index) => {
        const isCurrent = index === steps.length - 1;

        return (
          <div key={step} className="flex items-center gap-2">
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-bold ${
                isCurrent
                  ? 'border-emerald-500 bg-emerald-500 text-white'
                  : 'border-emerald-200 bg-emerald-50 text-emerald-700'
              }`}
              aria-current={isCurrent ? 'step' : undefined}
            >
              {index + 1}
            </div>
            <span className={`text-xs font-semibold sm:text-sm ${isCurrent ? 'text-zinc-950' : 'text-zinc-500'}`}>
              {step}
            </span>
          </div>
        );
      })}
    </div>
  </section>
);
