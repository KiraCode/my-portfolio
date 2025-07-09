import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import LineUI from "../components/ui/LineUI";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9bf69ba3-fd8a-4a74-9db6-ec135ead317f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log(data);

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
        <h1 className="pb-2 pr-5 text-center text-5xl md:text-6xl md:text-end lg:text-7xl font-semibold bg-gradient-to-r from-purple-500 to-gray-300 bg-clip-text text-transparent leading-tight md:leading-tight lg:leading-tight">
          Contact me
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Please fill out the form to discuss any work opportunities.
        </p>

        <form onSubmit={onSubmit} className="max-w-2xl w-full space-y-6 px-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-purple-100 placeholder:text-gray-600"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-purple-100 placeholder:text-gray-600"
          />
          <textarea
            rows="5"
            name="message"
            required
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-purple-100 placeholder:text-gray-600"
          ></textarea>
          <button
            type="submit"
            onClick={() => toast.success("Email Sent!")}
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Submit
          </button>
          <ToastContainer />
        </form>
        <LineUI />
      </div>
    </div>
  );
};

export default Contact;
