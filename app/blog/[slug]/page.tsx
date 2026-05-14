import Link from 'next/link'
import type { Metadata } from 'next'
import type { ComponentType } from 'react'
import { notFound } from 'next/navigation'
import { blogPosts, getBlogPostBySlug } from '@/data/blog'
import InternetOfAgentsContent from '@/components/blog/InternetOfAgentsContent'

const postBodies: Record<string, ComponentType> = {
  'internet-of-agents': InternetOfAgentsContent,
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

type Props = { params: { slug: string } }

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPostBySlug(params.slug)
  if (!post) {
    return { title: 'Post not found' }
  }
  return {
    title: `${post.title} | Necdet Alpmen`,
    description: post.description,
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)
  const Body = postBodies[params.slug]

  if (!post || !Body) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="text-sm font-medium text-primary-600 hover:text-primary-700 mb-8 inline-block"
        >
          ← Back to blog
        </Link>
        <header className="mb-12">
          <time dateTime={post.date} className="text-sm text-gray-500">
            {new Date(post.date + 'T12:00:00').toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 leading-tight">{post.title}</h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">{post.description}</p>
        </header>
        <Body />
      </div>
    </article>
  )
}
