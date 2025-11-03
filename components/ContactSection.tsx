export default function ContactSection() {
  return (
    <section id="contact" className="container mx-auto px-4 py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Contact
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Let&apos;s connect! Feel free to reach out for collaborations, questions, or just to say hello.
        </p>

        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-md">
          <div className="space-y-6">
            <div className="text-left">
              <div className="text-sm text-gray-500 mb-2 font-medium">Email</div>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-900 hover:text-primary-600 transition-colors text-lg font-medium"
              >
                your.email@example.com
              </a>
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-500 mb-2 font-medium">GitHub</div>
              <a
                href="https://github.com/NecdetAlpmen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-primary-600 transition-colors text-lg font-medium"
              >
                github.com/NecdetAlpmen
              </a>
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-500 mb-2 font-medium">LinkedIn</div>
              <a
                href="https://linkedin.com/in/necdetalpmen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-primary-600 transition-colors text-lg font-medium"
              >
                linkedin.com/in/necdetalpmen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

