import React from "react";

const Home = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYuIzPp2c-mJZT6e1N05sFz98LGTyC3EdLbA&s')] bg-cover bg-center text-center py-20 h-screen flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold mb-4 animate-slideToCenter">
          Empowering your tech dreams,
          <br />
          one innovation at a time
        </h1>
        <p className=" font-moto text-xl text-gray-500 max-w-xl mx-auto mb-10 ">
          Welcome to TechNetCloud! Transforming industries with cutting-edge
          technology and seamless integration. Driving digital transformation
          with innovative solutions and unparalleled expertise.
        </p>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Our Services
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-800 p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4 text-white">
              Web Development
            </h3>
            <p className="text-gray-400">
              Building responsive and modern websites.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4 text-white">
              Mobile App Development
            </h3>
            <p className="text-gray-400">
              Creating mobile apps tailored to your needs.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4 text-white">
              AI Integration
            </h3>
            <p className="text-gray-400">Integrating AI-driven solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
