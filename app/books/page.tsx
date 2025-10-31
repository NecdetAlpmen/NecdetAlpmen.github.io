import { books } from '@/data/books'

export default function BooksPage() {
  const favoriteBooks = books.filter(book => book.favorite)
  const currentlyReading = books.filter(book => book.currentlyReading)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Books
          </h1>
          <p className="text-gray-600 text-lg">
            Books that inspire my work and ongoing learning
          </p>
        </div>

        {currentlyReading.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Currently Reading
            </h2>
            <ul className="space-y-3">
              {currentlyReading.map((book) => (
                <li key={book.id} className="text-gray-900">
                  <div>
                    <span className="font-medium">{book.title}</span>
                    {' '}by {book.author}
                    {book.summary && (
                      <span className="text-gray-600 text-sm"> — {book.summary}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Favorite Books for Work
          </h2>
          <ul className="space-y-3">
            {favoriteBooks.map((book) => (
              <li key={book.id} className="text-gray-900">
                <div>
                  <span className="font-medium">{book.title}</span>
                  {' '}by {book.author}
                  {book.summary && (
                    <span className="text-gray-600 text-sm"> — {book.summary}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}


