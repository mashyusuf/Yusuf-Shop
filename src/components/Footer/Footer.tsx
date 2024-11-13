import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import { logo } from '@/app/assets/banner';

function Footer() {
  return (
    <footer className="bg-gray-100 py-12 border-t border-gray-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between text-center md:text-left space-y-8 md:space-y-0">
        
        {/* Left Section */}
        <div className="md:w-1/4">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Image src={logo} className="w-20 rounded-lg" alt="Yusuf Shop logo" />
            <h2 className="text-2xl font-bold text-gray-800">Yusuf Shop<br/><span className="text-gray-600 text-lg">Buy Your Dreams</span></h2>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            Discover exclusive products and premium offers at Yusuf Shop. Quality meets elegance for your dream shopping experience.
          </p>
          <div className="flex justify-center md:justify-start space-x-3 mt-4">
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition p-2 rounded-full border border-gray-300">
              <FaFacebookF size={20} />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition p-2 rounded-full border border-gray-300">
              <FaSquareXTwitter size={20} />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition p-2 rounded-full border border-gray-300">
              <FaLinkedinIn size={20} />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition p-2 rounded-full border border-gray-300">
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>

        {/* Middle Section - My Account */}
        <div className="md:w-1/5 space-y-2">
          <h3 className="text-lg font-semibold text-gray-700">My Account</h3>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li><Link href="#" className="hover:text-gray-800">Home</Link></li>
            <li><Link href="#" className="hover:text-gray-800">Shop All Products</Link></li>
            <li><Link href="#" className="hover:text-gray-800">Wishlist</Link></li>
            <li><Link href="#" className="hover:text-gray-800">Order History</Link></li>
            <li><Link href="#" className="hover:text-gray-800">Profile</Link></li>
          </ul>
        </div>

        {/* Middle Section - Information */}
        <div className="md:w-1/5 space-y-2">
          <h3 className="text-lg font-semibold text-gray-700">Customer Support</h3>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li><Link href="#" className="hover:text-gray-800">Shipping Info</Link></li>
            <li><Link href="#" className="hover:text-gray-800">Returns & Exchanges</Link></li>
            <li><Link href="#" className="hover:text-gray-800">FAQs</Link></li>
            <li><Link href="#" className="hover:text-gray-800">Track Order</Link></li>
            <li><Link href="#" className="hover:text-gray-800">Contact Support</Link></li>
          </ul>
        </div>

        {/* Right Section - Contact Information */}
        <div className="md:w-1/4">
          <h3 className="text-lg font-semibold text-gray-700">Get in Touch</h3>
          <p className="text-gray-600 text-sm mt-2">Questions? We’re here to help.</p>
          <p className="text-lg font-semibold text-gray-800 mt-4">+670 413 90 762</p>
          <p className="flex items-center text-gray-600 text-sm mt-2">
            <span className="mr-2">📧</span> support@yusufshop.com
          </p>
          <p className="flex items-center text-gray-600 text-sm mt-2">
            <span className="mr-2">📍</span> Dhaka, Bangladesh
          </p>
        </div>
      </div>
      
      {/* Dots Divider */}
      <div className="flex justify-center mt-10 space-x-1">
        <span className="text-gray-400">•</span>
        <span className="text-gray-400">•</span>
        <span className="text-gray-400">•</span>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Yusuf Shop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
