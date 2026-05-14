import Hero from '@/components/Hero'
import WorkSection from '@/components/WorkSection'
import PatentsSection from '@/components/PatentsSection'
import BooksSection from '@/components/BooksSection'
import BeersSection from '@/components/BeersSection'
import BlogSection from '@/components/BlogSection'

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <WorkSection />
      <PatentsSection />
      <BooksSection />
      <BeersSection />
      <BlogSection />
    </div>
  )
}

