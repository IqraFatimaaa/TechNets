import React from "react";

const Home = () => {
  return (
    <section className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Website</h1>
      <p className="text-gray-400 mb-6">
        Transforming industries with cutting-edge technology and seamless
        integration.
      </p>
      <a
        href="/about"
        className="bg-blue-500 px-6 py-3 rounded-md text-white hover:bg-blue-600"
      >
        Learn More
      </a>
    </section>
  );
};

export default Home;
