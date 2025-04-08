'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileNavigation from './MobileNavigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentBook, setCurrentBook] = useState({
    title: "The Midnight Library",
    author: "Matt Haig",
    cover: "/book-covers/midnight-library.jpg"
  });
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: '📚', description: 'Personalized feed with AI recommendations' },
    { name: 'Book Clubs', path: '/clubs', icon: '👥', description: 'Weekly picks and club discussions' },
    { name: 'Challenges', path: '/challenges', icon: '🏆', description: 'Reading goals and achievements' },
    { name: 'Notifications', path: '/notifications', icon: '🔔', description: 'Club activity and AI tips' },
    { name: 'Profile', path: '/profile', icon: '👤', description: 'Reading insights and history' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link 
              href="/" 
              className="flex-shrink-0 flex items-center"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                BookHive
              </span>
            </Link>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link 
                href="/recommendations" 
                className="nav-link"
              >
                Recommendations
              </Link>
              <Link 
                href="/clubs" 
                className="nav-link"
              >
                Book Clubs
              </Link>
            </nav>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <Link 
              href="/auth/login" 
              className="nav-link"
            >
              Log in
            </Link>
            <Link 
              href="/auth/register" 
              className="btn-primary"
            >
              Sign up
            </Link>
            <Link 
              href="/profile" 
              className="nav-link"
            >
              Profile
            </Link>
          </div>
          
          {/* Mobile menu */}
          <MobileNavigation />
        </div>
      </div>

      {/* Current Book Banner */}
      {isScrolled && (
        <div className="bg-gradient-to-r from-primary-color/5 to-secondary-color/5 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-lg bg-gray-200"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">Currently Reading</p>
                <p className="text-sm text-gray-600">{currentBook.title} by {currentBook.author}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AI Companion FAB */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-accent-color rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </button>
    </header>
  );
};

export default Header; 