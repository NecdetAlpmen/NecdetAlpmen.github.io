'use client'

import { useState } from 'react'
import { workItems } from '@/data/work'
import { WorkItem } from '@/types'

export default function WorkSection() {
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null)

  return (
    <section id="work" className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
            Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden h-full card-hover shadow-md">
                {item.thumbnailUrl ? (
                  <div className="overflow-hidden bg-gray-100 flex items-center justify-center h-48">
                    <img
                      src={item.thumbnailUrl}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full opacity-50"></div>
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for viewing work items */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-bold text-gray-900">{selectedItem.title}</h3>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-light"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            
            {selectedItem.type === 'video' && selectedItem.mediaUrl ? (
              <div className="mb-6 aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={selectedItem.mediaUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : selectedItem.type === 'image' && selectedItem.thumbnailUrl ? (
              <div className="mb-6 rounded-lg overflow-hidden">
                <img
                  src={selectedItem.thumbnailUrl}
                  alt={selectedItem.title}
                  className="w-full"
                />
              </div>
            ) : (!selectedItem.mediaUrl && !selectedItem.thumbnailUrl) ? (
              <div className="mb-6 aspect-video rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full opacity-50"></div>
              </div>
            ) : null}

            <p className="text-gray-700 mb-6 text-lg leading-relaxed">{selectedItem.description}</p>

            {selectedItem.link && (
              <a
                href={selectedItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium shadow-md"
              >
                View Project
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

