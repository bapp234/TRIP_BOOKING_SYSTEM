import { PAYMENT_METHODS } from '../config/payment-methods';

export const PaymentMethods = ({ selectedMethod, onSelect }) => (
  <section className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6">
    <div className="mb-5">
      <h2 className="text-lg font-bold text-zinc-950">Phương thức thanh toán</h2>
      <p className="mt-1 text-sm text-zinc-500">Các cổng thanh toán đang ở trạng thái mô phỏng UI.</p>
    </div>

    <div className="grid gap-3 sm:grid-cols-2" role="group" aria-label="Chọn phương thức thanh toán">
      {PAYMENT_METHODS.map((method) => {
        const isSelected = selectedMethod === method.id;

        return (
          <button
            key={method.id}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onSelect(method.id)}
            className={`rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
              isSelected ? 'border-emerald-500 bg-emerald-50/60' : 'border-zinc-200 bg-white'
            }`}
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <p className="font-bold text-zinc-950">{method.name}</p>
                <p className="mt-1 text-sm leading-5 text-zinc-600">{method.description}</p>
              </div>
              <span
                className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-bold ${method.accentClass}`}
              >
                {method.badge}
              </span>
            </div>
            <span
              className={`inline-flex h-5 w-5 items-center justify-center rounded-full border ${
                isSelected ? 'border-emerald-500 bg-emerald-500' : 'border-zinc-300 bg-white'
              }`}
            >
              <span className={`h-2 w-2 rounded-full ${isSelected ? 'bg-white' : 'bg-transparent'}`} />
            </span>
          </button>
        );
      })}
    </div>
  </section>
);
