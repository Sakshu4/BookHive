'use client';
import React from 'react';

export default function BookClubs() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Book Clubs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for book club cards */}
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Club Name</h2>
          <p className="text-gray-600">Current Book: Book Title</p>
          <p className="mt-2">Club description will go here...</p>
          <button className="mt-4 bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700">
            Join Club
          </button>
        </div>
        {/* More club cards will be added here */}
      </div>
    </main>
  );
} 