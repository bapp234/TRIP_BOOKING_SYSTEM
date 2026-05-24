import { CONTACT_METHODS } from '../config/contact-info';

export const ContactInfoWidget = () => (
  <aside className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">
    <div className="mb-5">
      <h2 className="text-xl font-bold text-zinc-950">Kênh liên hệ</h2>
      <p className="mt-2 text-sm leading-6 text-zinc-600">
        Chọn kênh phù hợp để TripBooking hỗ trợ nhanh các vấn đề về chuyến xe, vé và thanh toán.
      </p>
    </div>

    <div className="space-y-3">
      {CONTACT_METHODS.map((method) => {
        const Icon = method.icon;
        const content = (
          <>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
              <Icon aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-zinc-500">{method.title}</span>
              <span className="mt-0.5 block break-words text-base font-bold text-zinc-950">{method.value}</span>
              <span className="mt-1 block text-sm leading-5 text-zinc-600">{method.description}</span>
            </span>
          </>
        );

        return method.href ? (
          <article key={method.id}>
            <a
              href={method.href}
              className="flex gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition hover:border-emerald-200 hover:bg-emerald-50/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              {content}
            </a>
          </article>
        ) : (
          <article key={method.id} className="flex gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            {content}
          </article>
        );
      })}
    </div>
  </aside>
);
