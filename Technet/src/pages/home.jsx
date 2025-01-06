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
      {/* Third Section */}
      <section className="bg-gray-900 py-20">
        {/* Title and Description */}
        <div className="text-center text-white mb-10">
          <h2 className="text-4xl font-bold mb-4">We are ready to help</h2>
          <p className="text-gray-400">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>

        {/* Video Section */}
        <div className="flex justify-center items-center h-screen">
          <div className="relative max-w-5xl w-full aspect-w-16 aspect-h-9  ml-40 mt-0">
            <iframe
              className="rounded-lg shadow-lg w-[800px] h-[450px] " // Set width and height
              src="https://www.youtube.com/embed/L61p2uyiMSo?autoplay=0&rel=0"
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
          {/* Left Side Content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold mb-4">
              We craft SaaS, Business Sites & more.
            </h2>
            <p className="text-gray-400 mb-6">
              We specialize in crafting SaaS platforms, business websites, and
              more to fit your unique needs. Our solutions are designed to drive
              growth, enhance functionality, and elevate your digital presence.
            </p>
            <ul className="grid grid-cols-2 gap-4 text-sm">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-blue-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Premium quality
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-blue-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Rich documentation
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-blue-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Use for lifetime
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-blue-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Developer friendly
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-blue-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Full control
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-blue-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                In your budget
              </li>
            </ul>
          </div>

          {/* Right Side Content */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="grid grid-rows-3 gap-4">
                <div className="w-40 h-28 bg-gray-700 rounded"></div>
                <div className="w-40 h-28 bg-gray-700 rounded"></div>
                <div className="w-40 h-28 bg-gray-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-grey-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative bg-gray-800 rounded-lg p-6">
              {/* Mock Browser Window */}
              <div className="bg-gray-700 h-6 w-1/4 rounded-md mb-4"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-600 h-24 rounded-md"></div>
                <div className="bg-gray-600 h-24 rounded-md"></div>
                <div className="bg-gray-600 h-24 rounded-md"></div>
                <div className="bg-gray-600 h-24 rounded-md"></div>
              </div>
              {/* Floating Element */}
              <div className="absolute top-10 left-10 bg-blue-500 w-8 h-8 rounded-full"></div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 ml-16">
            <div className="mb-6">
              <h3 className="text-xl font-bold">Innovative Solutions</h3>
              <p className="text-gray-400">
                We provide cutting-edge tech solutions that drive innovation and
                keep your business ahead in a rapidly evolving digital
                landscape.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold">Expert Consultation</h3>
              <p className="text-gray-400">
                Our team of experts offers comprehensive consultation to help
                you navigate complex tech challenges and implement effective
                strategies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Advanced Tech Stack</h3>
              <p className="text-gray-400">
                We utilize a state-of-the-art tech stack to build scalable and
                high-performance solutions tailored to your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>
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
      <section className="bg-grey-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leads</h2>
            <p className="text-gray-400">
              Meet our leaders, visionary professionals guiding our team with
              expertise and strategic insight. Their dedication and innovative
              approach drive our mission to deliver outstanding tech solutions.
            </p>
          </div>

          {/* Lead Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <p className="text-gray-400 mb-4">
                Python, AI, Data Science developer, MERN stack trainer
              </p>
              <hr className="border-gray-600 mb-4" />
              <div className="flex items-center justify-center">
                <img
                  src="https://www.technetcloud.co/_next/image?url=%2Fimages%2Ftestimonials%2Fauth-01.jpg&w=1920&q=75"
                  alt="Aliyan Shaikh"
                  className="rounded-full w-12 h-12 mr-4"
                />
                <div>
                  <h4 className="font-bold">Aliyan Shaikh</h4>
                  <p className="text-gray-500 text-sm">
                    CEO & Founder @TechNetCloud
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <p className="text-gray-400 mb-4">
                Marketing specialist, UI/UX designer & Frontend developer
              </p>
              <hr className="border-gray-600 mb-4" />
              <div className="flex items-center justify-center">
                <img
                  src="https://www.technetcloud.co/_next/image?url=%2Fimages%2Ftestimonials%2Fauth-02.jpg&w=1920&q=75"
                  alt="Muhammad Anas Khan"
                  className="rounded-full w-12 h-12 mr-4"
                />
                <div>
                  <h4 className="font-bold">Muhammad Anas Khan</h4>
                  <p className="text-gray-500 text-sm">CMO @TechNetCloud</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <p className="text-gray-400 mb-4">
                Next.js, Node.js, Full stack developer, Lead @TechNetCloud
              </p>
              <hr className="border-gray-600 mb-4" />
              <div className="flex items-center justify-center">
                <img
                  src="https://www.technetcloud.co/_next/image?url=%2Fimages%2Ftestimonials%2Fauth-03.png&w=1920&q=75"
                  alt="Muhammad Ahad"
                  className="rounded-full w-12 h-12 mr-4"
                />
                <div>
                  <h4 className="font-bold">Muhammad Ahad</h4>
                  <p className="text-gray-500 text-sm">CTO @TechNetCloud</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
