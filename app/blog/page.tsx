import Link from 'next/link'
import { blogPosts } from '@/data/blog'

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Blog
          </h1>
          <p className="text-gray-600 text-lg">
            Thoughts, learnings, and musings
          </p>
        </div>

        <div className="space-y-4">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-gray-200 rounded-lg p-5 card-hover shadow-md group cursor-pointer"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-3 line-clamp-2 leading-relaxed text-sm">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-right md:text-left md:min-w-[120px]">
                    <div className="text-sm text-gray-500 mb-1 font-medium">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </div>
                    <div className="text-xs text-gray-400">
                      {post.readTime} min read
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-primary-600 font-medium text-sm group-hover:text-primary-700">
                  Read more →
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

