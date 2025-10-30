import { patents } from '@/data/patents'

export default function PatentsSection() {
  if (patents.length === 0) {
    return null
  }

  return (
    <section id="patents" className="container mx-auto px-4 py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
            Patents
          </h2>
        </div>

        <div className="space-y-3">
          {patents.map((patent) => (
            <div
              key={patent.id}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {patent.title}
                    </h3>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm font-medium text-gray-700">{patent.patentNumber}</span>
                    {patent.status && (
                      <>
                        <span className="text-sm text-gray-500">•</span>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          patent.status === 'Granted' 
                            ? 'bg-green-100 text-green-700' 
                            : patent.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {patent.status}
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {patent.description}
                  </p>
                </div>
                {patent.patentUrl && (
                  <a
                    href={patent.patentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 text-primary-600 hover:text-primary-700 font-medium text-xs pb-0.5"
                  >
                    View →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

