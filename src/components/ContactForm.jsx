import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.licenseType) newErrors.licenseType = "Select a license type.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      // reset
      setFormData({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8">
        Get in Touch
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto text-left space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
        />

        <select
          name="licenseType"
          value={formData.licenseType}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
        >
          <option value="">Select License Type*</option>
          <option value="Office Suite">Office Suite</option>
          <option value="Security Software">Security Software</option>
          <option value="Design Tools">Design Tools</option>
          <option value="Other">Other</option>
        </select>
        {errors.licenseType && (
          <p className="text-red-500 text-sm">{errors.licenseType}</p>
        )}

        <textarea
          name="message"
          placeholder="Message*"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
