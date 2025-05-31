import React from 'react'

const Contact = () => {
  return (
    <div className="pt-[100px] px-6 md:px-20 pb-20 bg-gray-50 text-gray-800">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We're here to help and answer any questions you might have. Reach out to us through the form or contact details below.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="bg-white shadow-md p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">Contact Information</h2>
          <ul className="space-y-4 text-gray-700">
            <li><strong>Email:</strong> gmustufa1255@gmail.com</li>
            <li><strong>Phone:</strong> +92 300 1234567</li>
            <li><strong>Address:</strong> Main Market Saddar, Karachi, Pakistan</li>
            <li><strong>Hours:</strong> Mon - Fri: 9:00 AM - 6:00 PM</li>
          </ul>
        </div>

        <form className="bg-white shadow-md p-8 rounded-lg space-y-6">
          <h2 className="text-2xl font-semibold text-blue-500">Send Us a Message</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
