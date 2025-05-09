const testimonials = [
  {
    name: "Aditi Sharma",
    role: "IT Manager",
    company: "TechNova Solutions",
    quote:
      "SoftSell helped us turn our unused software into working capital. The process was quick and secure. Highly recommended!",
  },
  {
    name: "Rahul Mehta",
    role: "Procurement Head",
    company: "CoreSys Pvt. Ltd.",
    quote:
      "I was amazed at how easy it was to get a valuation and receive payment. SoftSell is now our go-to platform for license resale.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-800 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12">
        What Our Customers Say
      </h2>
      <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow-sm text-left"
          >
            <p className="text-gray-700 dark:text-gray-300 italic">
              “{t.quote}”
            </p>
            <div className="mt-4 text-sm text-gray-800 dark:text-white font-semibold">
              {t.name}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {t.role}, {t.company}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
