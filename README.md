# NecdetAlpmen.github.io

A professional personal website built with Next.js and TypeScript, showcasing work, books, and blog posts.

## Features

- 🎨 Professional and nerdy design with terminal-inspired elements
- 📹 Work showcase with support for videos, images, and projects
- 📚 Books section to display reading interests
- ✍️ Blog section for thoughts and articles
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and TypeScript
- 🎯 Optimized for GitHub Pages deployment

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/NecdetAlpmen/NecdetAlpmen.github.io.git
cd NecdetAlpmen.github.io
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. Edit `components/Hero.tsx` to update the hero section
2. Edit `components/ContactSection.tsx` to update contact information
3. Edit `components/Footer.tsx` to update social links

### Add Your Work

Edit `data/work.ts` to add your projects, videos, and images.

### Add Books

Edit `data/books.ts` to add books you've read.

### Add Blog Posts

Edit `data/blog.ts` to add your blog posts. Create individual blog post pages in `app/blog/[id]/page.tsx` if needed.

## Deployment to GitHub Pages

1. Build the static site:
```bash
npm run build
```

2. The output will be in the `out` directory.

3. Configure GitHub Pages:
   - Go to your repository settings
   - Navigate to Pages section
   - Set source to deploy from the `out` directory or a GitHub Actions workflow

4. Alternatively, you can use GitHub Actions to automatically deploy:
   - Create `.github/workflows/deploy.yml`
   - The workflow should build and deploy the `out` directory

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **GitHub Pages** - Hosting

## License

MIT
