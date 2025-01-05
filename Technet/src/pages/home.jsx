import React from "react";

const Home = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYuIzPp2c-mJZT6e1N05sFz98LGTyC3EdLbA&s')] bg-cover bg-center text-center py-20 h-screen flex flex-col justify-center items-center text-white">
        <h1 className="text-6xl font-bold mb-4 animate-slideToCenter">
          Empowering your tech dreams,
          <br />
          one innovation at a time
        </h1>
        <p className=" font-moto text-3xl text-gray-500  max-w-2xl mx-auto mb-10 font-bold">
          Welcome to TechNetCloud! Transforming industries with cutting-edge
          technology and seamless integration. Driving digital transformation
          with innovative solutions and unparalleled expertise.
        </p>
      </div>

      {/* Services Section */}

      <div className="py-20 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-10 text-white ">
          Evalute your Digital Experience
        </h2>
        <p className=" font-moto text-xl text-gray-500  max-w-3xl mx-auto mb-10 font-bold">
          Discover powerful, tech-driven solutions tailored to elevate your
          digital experience. Our platform adapts to your needs, providing10
          seamless integration, unmatched performance, and future-ready
          innovation.
        </p>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-800 p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4 text-white">
              Crafted For Startups
            </h3>
            <p className="text-gray-400">
              We deliver tailored tech solutions designed to accelerate growth.
              From seamless integrations to scalable innovations, we empower
              your business to thrive.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4 text-white">
              High-quality Design
            </h3>
            <p className="text-gray-400">
              High-quality design that elevates your brand's visual identity. We
              create stunning, user-centric designs that make a lasting
              impression.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4 text-white">
              Latest Technologies
            </h3>
            <p className="text-gray-400">
              Harness the latest technologies to stay ahead of the curve. We
              implement cutting-edge solutions to drive innovation and
              efficiency for your business.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-gray-800 p-6 rounded-md">
          <h3 className="text-xl font-bold mb-4 text-white">
            Reasonable Pricing
          </h3>
          <p className="text-gray-400">
            Reasonable pricing that aligns with your budget. We provide
            exceptional value through cost-effective solutions tailored to your
            needs.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-md">
          <h3 className="text-xl font-bold mb-4 text-white">SEO Friendly</h3>
          <p className="text-gray-400">
            SEO-friendly products designed to boost your online visibility. We
            ensure your solutions are optimized for search engines to drive
            traffic and enhance engagement.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-md">
          <h3 className="text-xl font-bold mb-4 text-white">Fully Control</h3>
          <p className="text-gray-400">
            Full control over your product, giving you complete oversight and
            customization. Manage every aspect with ease to align with your
            vision and goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
