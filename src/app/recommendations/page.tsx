'use client';
import React from 'react';

export default function Recommendations() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Book Recommendations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for book cards */}
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Book Title</h2>
          <p className="text-gray-600">Author Name</p>
          <p className="mt-2">Book description will go here...</p>
        </div>
        {/* More book cards will be added here */}
      </div>
    </main>
  );
} 