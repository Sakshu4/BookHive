'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden">
      {/* Mobile menu button */}
      <button
        type="button"
        onClick={toggleMenu}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Open main menu</span>
        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="/recommendations"
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600"
          >
            Recommendations
          </Link>
          <Link
            href="/clubs"
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600"
          >
            Book Clubs
          </Link>
          <Link
            href="/auth/login"
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600"
          >
            Log in
          </Link>
          <Link
            href="/auth/register"
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600"
          >
            Sign up
          </Link>
          <Link
            href="/profile"
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600"
          >
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
} 