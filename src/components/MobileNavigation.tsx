'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-gray-100"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg p-4">
          <nav className="space-y-4">
            <Link href="/recommendations" className="block nav-link">
              Recommendations
            </Link>
            <Link href="/clubs" className="block nav-link">
              Book Clubs
            </Link>
            <Link href="/auth/login" className="block nav-link">
              Log in
            </Link>
            <Link href="/auth/register" className="block btn-primary text-center">
              Sign up
            </Link>
            <Link href="/profile" className="block nav-link">
              Profile
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation; 