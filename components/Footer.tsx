export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm mb-4 md:mb-0">
            © {currentYear} Necdet Alpmen. Built with Next.js, TypeScript & Cursor.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/NecdetAlpmen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/necdetalpmen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/necdetalpmen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

