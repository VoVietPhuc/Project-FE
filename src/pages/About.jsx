import React from 'react';
import '../components/About.css'; 
import Footer from '../components/Footer'; // Import Footer
const About = () => {
  return (
   <>
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">About Us</h1>
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12">
          <img src="about.jpg" alt="Logo" style={{ borderRadius: '15px' }} />
          </div>
          <div className="w-full md:w-6/12">
            <p className="text-xl mb-4">Welcome to our website! We are a team of passionate individuals dedicated to providing high-quality products and services. Our mission is to make a positive impact in the world through innovation and creativity.</p>
            <br />
            <br />
            <p className="mb-4">With years of experience in the industry, we strive to deliver exceptional solutions tailored to meet the unique needs of our clients. We believe in building strong relationships and delivering results that exceed expectations.</p>
            <br />
            <br />
            <p className="mb-4">Feel free to explore our website and learn more about our work. If you have any questions or inquiries, please don't hesitate to <a href="/contact" className="text-blue-500 hover:underline">contact us</a>.</p>
            <br />
             <br />
            <p className="mb-4">We are committed to excellence and dedicated to your success.</p>
            <br />
            <br />
            <p className="mb-4">Our team is driven by a passion for creating solutions that make a positive impact.</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Footer />
    </div>
   </>
  );
};

export default About;
