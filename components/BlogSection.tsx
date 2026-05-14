import Link from 'next/link'
import { blogPosts } from '@/data/blog'

export default function BlogSection() {
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <section id="blog" className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Blog</h2>
          <p className="text-gray-600">Recent writing.</p>
        </div>
        <ul className="space-y-6">
          {sorted.slice(0, 5).map((post) => (
            <li
              key={post.slug}
              className="border border-gray-200 rounded-lg p-6 bg-white card-hover shadow-sm"
            >
              <time dateTime={post.date} className="text-sm text-gray-500">
                {new Date(post.date + 'T12:00:00').toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary-600 transition-colors">
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-medium text-primary-600 hover:text-primary-700"
              >
                Read post →
              </Link>
            </li>
          ))}
        </ul>
        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-block text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            View all posts →
          </Link>
        </div>
      </div>
    </section>
  )
}
