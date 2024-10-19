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
        <Image src="/cover.jpg" alt="Product 1" width={300} height={300} className="rounded-lg" />
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Product 1 Title
        </h2>
        <p className="text-gray-600 mt-2">
          This is a detailed description of Product 1. You can provide more information about the product here.
        </p>
        <a href="/shop" className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Buy Now
        </a>
      </main>

      {/* Footer */}
      <footer className="w-full mt-16 bg-gray-100 py-6 text-center">
        <p className="text-gray-600">
          © 2024 . *****Make More Beautifull your Self******
        </p>
      </footer>
    </div>
  );
}
