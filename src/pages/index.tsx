

import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="flex flex-col items-center py-10">
        <Image src="/vandanalogo.png" alt="Website Logo" width={150} height={150} />
        <h1 className="text-4xl font-bold text-gray-900 mt-4">
          Welcome to Your Beauty Website
        </h1>
        {/* Call to Action Button */}
        <a href="/shop" className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Shop Now
        </a>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md w-full py-4">
        <ul className="flex justify-center space-x-8 text-lg font-medium text-gray-700">
          <li><a href="/about" className="hover:text-blue-600">About us</a></li>
          <li><a href="/services" className="hover:text-blue-600">Services</a></li>
          <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>

      {/* Main Content Section */}
      <main className="flex flex-col items-center justify-center mt-16 px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Our Featured Products
        </h2>
        {/* Add product or service sections here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Example of a product card with a button */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image src="/cover'.jpg" alt="Product 1" width={300} height={300} className="rounded-lg" />
            <h3 className="text-xl font-bold mt-4">Product 1</h3>
            <p className="text-gray-600 mt-2">A brief description of the product.</p>
            {/* Product Button */}
            <a href="/product1" className="mt-4 inline-block px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
              View Product
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full mt-16 bg-gray-100 py-6 text-center">
        <p className="text-gray-600">
          © 2024 . *****Make More Beautyfull your Self****** .
        </p>
      </footer>
    </div>
  );
}
