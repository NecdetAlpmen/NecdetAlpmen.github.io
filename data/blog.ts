import type { BlogPostMeta } from '@/types'

export const blogPosts: BlogPostMeta[] = [
  {
    slug: 'internet-of-agents',
    title: 'The Internet of Agents: As Agents Become the Primary Users of the Web',
    date: '2026-05-14',
    description:
      'Why the web is shifting from human-first to agent-first consumption, and what an agent-native internet might require.',
  },
]

export function getBlogPostBySlug(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
