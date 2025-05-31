import React from 'react'

const About = () => {
    return (
        <div className="pt-[100px] px-10 md:px-20 bg-gray-50 text-gray-800">
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">About Our Store</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Welcome to <span className="font-semibold text-black">Shop</span> – your one-stop destination for fashion, electronics, and everything in between. We bring you quality products at unbeatable prices.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-3 text-blue-500">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to simplify your shopping experience by offering a wide selection of high-quality products delivered right to your doorstep. Whether you're upgrading your wardrobe or your workspace, we’re here to help you make confident purchasing decisions with ease and trust.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-3 text-blue-500">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          We aim to become the most customer-centric eCommerce platform that empowers users to discover, explore, and purchase everything they need from a single, reliable source. Innovation, affordability, and trust are at the core of our growth.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6 text-blue-500">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">Quality Products</h3>
            <p>We source only the best products to ensure long-lasting value and satisfaction for every purchase.</p>
          </div>
          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">Fast Delivery</h3>
            <p>Enjoy fast, reliable shipping so you can get your order quickly, no matter where you are.</p>
          </div>
          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">24/7 Support</h3>
            <p>Our customer support is always ready to help you with your questions or issues any time.</p>
          </div>
        </div>
      </section>

     
      <section className="text-center py-16 bg-blue-100 rounded-xl mb-20">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Join the Shopping Revolution</h2>
        <p className="mb-6 text-gray-700 max-w-2xl mx-auto">
          Whether you're a customer or a partner, we invite you to be a part of our journey toward redefining eCommerce.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Explore Our Products
        </button>
      </section>
    </div>
    )
}

export default About
