export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-10 px-4">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          About Vandana Chohan
        </h1>
        <p className="text-lg text-gray-600 mt-4 text-center">
          Discover our passion for beauty and commitment to providing exceptional services.
        </p>
      </header>

      {/* About Content */}
      <main className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Who We Are</h2>
        <p className="text-gray-600 mt-4">
          At Vandana Chohan, we believe that beauty is not just about looking good; it's about feeling confident and empowered. 
          Our team of skilled professionals is dedicated to enhancing your natural beauty through a range of personalized services.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Our Mission</h2>
        <p className="text-gray-600 mt-4">
          Our mission is to provide high-quality beauty services that cater to your individual needs. 
          We strive to create a welcoming and relaxing environment where you can unwind and indulge in self-care.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Get in Touch</h2>
        <p className="text-gray-600 mt-4">
          We would love to hear from you! If you have any questions or would like to book an appointment, feel free to 
          <a href="/contact" className="text-blue-600 hover:underline"> contact us</a>.
        </p>
      </main>

      {/* Footer */}
      <footer className="w-full mt-16 bg-gray-100 py-6 text-center">
        <p className="text-gray-600">
          © 2024 Vandana Chohan - Your Beauty Journey Starts Here
        </p>
      </footer>
    </div>
  );
}
