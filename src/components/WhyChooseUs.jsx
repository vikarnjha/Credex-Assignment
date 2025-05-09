import {
  ShieldCheckIcon,
  ClockIcon,
  SparklesIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: <ShieldCheckIcon className="h-10 w-10 text-green-600" />,
    title: "Secure Process",
    desc: "Your data is encrypted and handled with top-grade security standards.",
  },
  {
    icon: <ClockIcon className="h-10 w-10 text-green-600" />,
    title: "Quick Turnaround",
    desc: "Get quotes and payments within hours, not days.",
  },
  {
    icon: <SparklesIcon className="h-10 w-10 text-green-600" />,
    title: "Transparent Pricing",
    desc: "No hidden charges. What you see is what you get.",
  },
  {
    icon: <HandThumbUpIcon className="h-10 w-10 text-green-600" />,
    title: "Trusted by Professionals",
    desc: "Our platform is used by IT teams and resellers globally.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12">
        Why Choose SoftSell?
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
          >
            <div className="flex justify-center">{feature.icon}</div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
