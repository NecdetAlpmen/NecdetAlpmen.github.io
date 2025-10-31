import Hero from '@/components/Hero'
import WorkSection from '@/components/WorkSection'
import PatentsSection from '@/components/PatentsSection'
import BooksSection from '@/components/BooksSection'
// import BlogSection from '@/components/BlogSection'
import BeersSection from '@/components/BeersSection'

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <WorkSection />
      <PatentsSection />
      <BooksSection />
      <BeersSection />
      {/* <BlogSection /> */}
    </div>
  )
}

