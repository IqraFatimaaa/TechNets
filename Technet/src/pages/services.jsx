import React from "react";

const Services = () => {
  return (
    <>
      <section className="bg-gray-900 py-20 mb-0">
        {/* Title and Description */}
        <div className="text-center text-white mb-10">
          <h2 className="text-4xl font-bold mb-4">We are ready to help</h2>
          <p className="text-gray-400">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
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
      <div className="bg-grey-900 py-16 mt-0">
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Custom Software Development",
              description:
                "We collaborate with our clients to create scalable, efficient, and user-friendly applications.",
              icon: "fas fa-shopping-cart",
            },
            {
              title: "Mobile Application Development",
              description:
                "Developing high-quality mobile apps for iOS and Android that engage users and drive business growth.",
              icon: "fas fa-mobile-alt",
            },
            {
              title: "Web Application Development",
              description:
                "Creating responsive and secure websites that provide seamless user experiences across all devices.",
              icon: "fas fa-globe",
            },
            {
              title: "Cloud Solutions",
              description:
                "We enable businesses to leverage the scalability, flexibility, and cost-efficiency of cloud computing.",
              icon: "fas fa-cloud",
            },
            {
              title: "UI/UX Design",
              description:
                "Our design process focuses on understanding user needs to deliver products that are enjoyable to use.",
              icon: "fas fa-pencil-ruler",
            },
            {
              title: "Maintenance & Support",
              description:
                "We provide timely updates, bug fixes, and technical support to keep your applications performing optimally.",
              icon: "fas fa-tools",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_20px_#00FFFF]"
            >
              <div className="text-cyan-400 text-3xl mb-4">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
