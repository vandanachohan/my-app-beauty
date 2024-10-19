
import Image from 'next/image';

export default function Product1() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold text-gray-900">
          Product 1
        </h1>
      </header>

      {/* Product Details */}
      <main className="flex flex-col items-center justify-center mt-16 px-4 text-center">
        <Image src="/crd.jpg" alt="Product 1" width={300} height={300} className="rounded-lg" />
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Beauty Brush Collection: Ultimate Makeup Essentials
        </h2>
        <p className="text-gray-600 mt-2">
          This comprehensive 15-piece beauty brush set is designed to help you achieve flawless, professional-looking makeup applications. Made from high-quality materials, these brushes feature soft, synthetic bristles and ergonomic handles for comfortable grip and precision control.
        </p>
        <ul className="text-left mt-4 list-disc list-inside text-gray-600">
          <li>Soft, synthetic bristles for gentle application</li>
          <li>Ergonomic handles for comfortable grip and control</li>
          <li>Durable construction for long-lasting performance</li>
          <li>Suitable for all makeup types (liquid, cream, powder)</li>
          <li>Ideal for professionals and makeup enthusiasts</li>
        </ul>
        <a href="/shop" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Buy Now
        </a>
      </main>

      {/* Footer */}
      <footer className="w-full mt-16 bg-gray-100 py-6 text-center">
        <p className="text-gray-600">
          © 2024 . *****Make More Beautiful your Self******
        </p>
      </footer>
    </div>
  );
}
