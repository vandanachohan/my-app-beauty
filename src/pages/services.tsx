export default function Services() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-10 px-4">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 text-center">
            Our Beauty Services
          </h1>
          <p className="text-lg text-gray-600 mt-4 text-center">
            Explore our range of professional beauty services designed to enhance your natural beauty and confidence.
          </p>
        </header>
  
        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Makeup Application</h2>
            <p className="text-gray-600 mt-4">
              Professional makeup for special events, weddings, and photoshoots. Achieve a flawless look with our makeup artists.
            </p>
            <a href="/contact" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Book Now
            </a>
          </div>
  
          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Hair Styling</h2>
            <p className="text-gray-600 mt-4">
              From elegant updos to casual everyday styles, our hairstylists provide personalized hair services for every occasion.
            </p>
            <a href="/contact" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Book Now
            </a>
          </div>
  
          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Skincare Treatments</h2>
            <p className="text-gray-600 mt-4">
              Pamper your skin with our range of facial treatments, designed to nourish and rejuvenate for a radiant complexion.
            </p>
            <a href="/contact" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Book Now
            </a>
          </div>
  
          {/* Service 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Nail Care</h2>
            <p className="text-gray-600 mt-4">
              Enjoy our manicure and pedicure services, including nail art and gel treatments, for beautiful hands and feet.
            </p>
            <a href="/contact" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Book Now
            </a>
          </div>
  
          {/* Service 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Massage Therapy</h2>
            <p className="text-gray-600 mt-4">
              Relax and unwind with our massage services, tailored to relieve stress, improve circulation, and enhance wellbeing.
            </p>
            <a href="/contact" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Book Now
            </a>
          </div>
  
          {/* Service 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Bridal Services</h2>
            <p className="text-gray-600 mt-4">
              Special packages for brides, including makeup, hair, and skincare to ensure you look stunning on your big day.
            </p>
            <a href="/contact" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Book Now
            </a>
          </div>
        </div>
  
        {/* Footer */}
        <footer className="w-full mt-16 bg-gray-100 py-6 text-center">
          <p className="text-gray-600">
            © 2024 Vandana Chohan - Dedicated to Beauty and Wellness
          </p>
        </footer>
      </div>
    );
  }
  