import Link from 'next/link'
import type { Metadata } from 'next'
import { blogPosts } from '@/data/blog'

export const metadata: Metadata = {
  title: 'Blog | Necdet Alpmen',
  description: 'Writing on technology, agents, and the web.',
}

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-gray-600 mb-12">My notes and longer-form writing.</p>
        <ul className="space-y-10">
          {sorted.map((post) => (
            <li key={post.slug}>
              <article>
                <time dateTime={post.date} className="text-sm text-gray-500">
                  {new Date(post.date + 'T12:00:00').toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h2 className="text-xl md:text-2xl font-semibold mt-2 mb-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-gray-900 hover:text-primary-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 leading-relaxed">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block mt-3 text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  Read post →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
