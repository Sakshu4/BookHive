import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About BookHive</h3>
            <p className="text-gray-600">Your social platform for book lovers. Connect, discover, and share your reading journey.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/recommendations" className="text-gray-600 hover:text-primary-color">Recommendations</Link></li>
              <li><Link href="/clubs" className="text-gray-600 hover:text-primary-color">Book Clubs</Link></li>
              <li><Link href="/challenges" className="text-gray-600 hover:text-primary-color">Reading Challenges</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link href="/guidelines" className="text-gray-600 hover:text-primary-color">Community Guidelines</Link></li>
              <li><Link href="/help" className="text-gray-600 hover:text-primary-color">Help Center</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-primary-color">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-600 hover:text-primary-color">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-primary-color">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-gray-600 hover:text-primary-color">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} BookHive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 