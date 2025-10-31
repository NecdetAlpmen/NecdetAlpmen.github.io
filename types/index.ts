export interface WorkItem {
  id: string
  title: string
  description: string
  type: 'video' | 'image' | 'project'
  mediaUrl?: string
  thumbnailUrl?: string
  tags: string[]
  date: string
  link?: string
}

export interface Book {
  id: string
  title: string
  author: string
  coverUrl?: string
  rating?: number
  review?: string
  dateRead?: string
  tags: string[]
  favorite?: boolean
  summary?: string
  currentlyReading?: boolean
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  tags: string[]
  readTime: number
}

export interface Beer {
  id: string
  name: string
  brewery: string
  imageUrl?: string
  beerAdvocateScore?: number
  myScore?: number
  notes?: string
  style?: string
}

export interface Patent {
  id: string
  title: string
  patentNumber: string
  issueDate: string
  description: string
  inventors?: string[]
  patentUrl?: string
  status?: string
}

