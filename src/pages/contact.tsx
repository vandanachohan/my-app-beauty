export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-10 px-4">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Welcome to Vandana Customer Service
        </h1>
        <p className="text-lg text-gray-600 mt-4 text-center">
          How can we assist you today? Please fill out the form below to reach us.
        </p>
      </header>

      {/* Contact Form Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <form className="flex flex-col space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="How can we help you?"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="w-full mt-16 bg-gray-100 py-6 text-center">
        <p className="text-gray-600">
          © 2024 Vandana Chohan - Making Beauty Effortless for You
        </p>
      </footer>
    </div>
  );
}
