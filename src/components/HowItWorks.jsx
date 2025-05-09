import {
  CloudArrowUpIcon,
  CurrencyDollarIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    icon: <CloudArrowUpIcon className="h-12 w-12 text-blue-600" />,
    title: "Upload License",
    desc: "Submit details of your unused software licenses securely.",
  },
  {
    icon: <ClipboardDocumentCheckIcon className="h-12 w-12 text-blue-600" />,
    title: "Get Valuation",
    desc: "We evaluate your licenses and provide a fair market quote.",
  },
  {
    icon: <CurrencyDollarIcon className="h-12 w-12 text-blue-600" />,
    title: "Get Paid",
    desc: "Receive payment instantly after approval and sale.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-800 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12">
        How It Works
      </h2>
      <div className="grid gap-12 md:grid-cols-3 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            {step.icon}
            <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
              {step.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
