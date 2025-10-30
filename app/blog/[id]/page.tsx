import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts } from '@/data/blog'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-block mb-6 text-primary-600 hover:text-primary-700 font-medium transition-colors text-sm"
        >
          ← Back to Blog
        </Link>

        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
            <span>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>

          <div className="flex flex-wrap gap-2">
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

        <div className="prose prose-lg max-w-none">
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-md">
            <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
              {post.content || post.excerpt}
              {'\n\n'}
              <div className="mt-8 pt-8 border-t border-gray-200 text-gray-500 italic">
                This is a sample blog post. Replace this content with your actual blog post content.
                You can use Markdown, HTML, or any format you prefer for your blog posts.
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

