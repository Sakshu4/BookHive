import Link from 'next/link';

export default function BookDetails({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Book cover placeholder */}
          <div className="bg-gray-200 h-96 rounded-lg"></div>
          
          {/* Book details */}
          <div>
            <h1 className="text-4xl font-bold mb-4">Book Title</h1>
            <p className="text-xl text-gray-600 mb-4">Author Name</p>
            <div className="space-y-4">
              <p>Detailed book description will go here...</p>
              <div>
                <h2 className="text-xl font-semibold mb-2">Book Details</h2>
                <ul className="space-y-2">
                  <li>Genre: Fiction</li>
                  <li>Published: 2024</li>
                  <li>Pages: 300</li>
                </ul>
              </div>
              <div className="space-x-4">
                <button className="bg-blue-600 text-white rounded-md py-2 px-6 hover:bg-blue-700">
                  Add to Reading List
                </button>
                <Link href="/clubs" className="text-blue-600 hover:underline">
                  Find book clubs for this book
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related books */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Similar Books</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Link key={i} href={`/books/${i}`} className="block">
                <div className="bg-gray-200 h-40 rounded-lg mb-2"></div>
                <h3 className="font-semibold">Similar Book {i}</h3>
                <p className="text-sm text-gray-600">Author Name</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 