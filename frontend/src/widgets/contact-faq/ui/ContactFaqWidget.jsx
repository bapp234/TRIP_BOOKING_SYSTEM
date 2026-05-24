const contactFaqItems = [
  {
    question: 'Tôi có thể đổi hoặc hủy vé không?',
    answer:
      'Bạn có thể gửi yêu cầu đổi hoặc hủy vé qua form liên hệ. TripBooking sẽ kiểm tra điều kiện của chuyến xe và phản hồi hướng xử lý phù hợp.',
  },
  {
    question: 'TripBooking có hỗ trợ thanh toán VNPay/MoMo không?',
    answer:
      'Giao diện thanh toán VNPay/MoMo đang ở trạng thái mô phỏng trong dự án. Khi cổng thanh toán thật được kích hoạt, thông tin sẽ được cập nhật trong bước thanh toán.',
  },
  {
    question: 'Tôi cần làm gì nếu chưa nhận được xác nhận đặt vé?',
    answer:
      'Hãy kiểm tra email, số điện thoại đã nhập và gửi yêu cầu hỗ trợ kèm thông tin hành trình. Đội ngũ TripBooking sẽ đối chiếu và phản hồi sớm nhất.',
  },
  {
    question: 'Làm sao liên hệ nhà xe?',
    answer:
      'Bạn có thể liên hệ TripBooking trước để được hướng dẫn kênh hỗ trợ phù hợp. Với các chuyến đã đặt, thông tin nhà xe sẽ được xác nhận theo từng hành trình.',
  },
];

export const ContactFaqWidget = () => (
  <section className="bg-white py-12 md:py-16" aria-labelledby="contact-faq-title">
    <div className="mx-auto max-w-4xl px-4">
      <div className="mb-7 text-center">
        <h2 id="contact-faq-title" className="text-2xl font-bold text-zinc-950 md:text-3xl">
          Câu hỏi hỗ trợ nhanh
        </h2>
        <p className="mt-2 text-sm leading-6 text-zinc-600">
          Một số thông tin thường gặp khi khách hàng cần hỗ trợ đặt vé xe trên TripBooking.
        </p>
      </div>

      <div className="space-y-3">
        {contactFaqItems.map((item) => (
          <details key={item.question} className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <summary className="cursor-pointer text-sm font-bold text-zinc-950 marker:text-emerald-600 md:text-base">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-6 text-zinc-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);
