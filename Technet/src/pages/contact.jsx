import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-10">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="mb-6 text-gray-400">We’d love to hear from you!</p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
