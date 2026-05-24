import { useState } from 'react';

const initialFormState = {
  name: '',
  phone: '',
  email: '',
  subject: 'booking',
  message: '',
};

const supportTopics = [
  { value: 'booking', label: 'Hỗ trợ đặt vé' },
  { value: 'change-cancel', label: 'Đổi/hủy vé' },
  { value: 'payment', label: 'Thanh toán' },
  { value: 'operator-feedback', label: 'Góp ý nhà xe' },
  { value: 'other', label: 'Vấn đề khác' },
];

export const ContactForm = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setFormValues(initialFormState);
  };

  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm md:p-6" aria-labelledby="contact-form-title">
      <div className="mb-6">
        <h2 id="contact-form-title" className="text-2xl font-bold text-zinc-950">
          Gửi yêu cầu hỗ trợ
        </h2>
        <p className="mt-2 text-sm leading-6 text-zinc-600">
          Điền thông tin bên dưới để đội ngũ TripBooking kiểm tra và phản hồi yêu cầu liên quan đến vé xe của bạn.
        </p>
      </div>

      {isSubmitted && (
        <p className="mb-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700" role="status">
          Yêu cầu của bạn đã được ghi nhận. TripBooking sẽ phản hồi trong thời gian sớm nhất.
        </p>
      )}

      <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
        <div className="sm:col-span-2">
          <label htmlFor="contactName" className="mb-1.5 block text-sm font-semibold text-zinc-800">
            Họ và tên
          </label>
          <input
            id="contactName"
            name="name"
            type="text"
            autoComplete="name"
            value={formValues.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            placeholder="Nguyễn Văn A"
          />
        </div>

        <div>
          <label htmlFor="contactPhone" className="mb-1.5 block text-sm font-semibold text-zinc-800">
            Số điện thoại
          </label>
          <input
            id="contactPhone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formValues.phone}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            placeholder="0901234567"
          />
        </div>

        <div>
          <label htmlFor="contactEmail" className="mb-1.5 block text-sm font-semibold text-zinc-800">
            Email
          </label>
          <input
            id="contactEmail"
            name="email"
            type="email"
            autoComplete="email"
            value={formValues.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            placeholder="email@example.com"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contactSubject" className="mb-1.5 block text-sm font-semibold text-zinc-800">
            Chủ đề hỗ trợ
          </label>
          <select
            id="contactSubject"
            name="subject"
            value={formValues.subject}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-semibold text-zinc-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          >
            {supportTopics.map((topic) => (
              <option key={topic.value} value={topic.value}>
                {topic.label}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contactMessage" className="mb-1.5 block text-sm font-semibold text-zinc-800">
            Nội dung cần hỗ trợ
          </label>
          <textarea
            id="contactMessage"
            name="message"
            rows={5}
            value={formValues.message}
            onChange={handleChange}
            required
            className="w-full resize-none rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            placeholder="Ví dụ: Tôi cần đổi giờ khởi hành hoặc kiểm tra trạng thái đặt vé."
          />
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-500 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:w-auto"
          >
            Gửi yêu cầu
          </button>
        </div>
      </form>
    </section>
  );
};
