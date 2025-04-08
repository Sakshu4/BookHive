'use client';
import React from 'react';

export default function Profile() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="flex items-center space-x-6 mb-8">
          <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
          <div>
            <h1 className="text-3xl font-bold">User Name</h1>
            <p className="text-gray-600">@username</p>
            <p className="mt-2">Book lover | Reader | Reviewer</p>
          </div>
        </div>

        {/* Reading Lists */}
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Currently Reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Book card placeholder */}
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold">Book Title</h3>
                <p className="text-gray-600">Author Name</p>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">60% complete</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Reading History</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Completed book placeholder */}
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold">Book Title</h3>
                <p className="text-gray-600">Author Name</p>
                <p className="text-sm text-gray-600 mt-2">Completed on: Date</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 