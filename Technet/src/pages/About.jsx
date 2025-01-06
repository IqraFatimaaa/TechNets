import React from "react";

const About = () => {
  return (
    <>
      <section className="p-10">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-400 max-w-xl">
          We are a forward-thinking tech company, dedicated to delivering
          innovative solutions that empower businesses to thrive in the digital
          age. Our expert team combines cutting-edge technology with a
          customer-first approach to drive success and growth.
        </p>
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
    </>
  );
};

export default About;
