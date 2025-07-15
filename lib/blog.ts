import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  authorBio?: string
  date: string
  readTime: string
  tags: string[]
  image?: string
}

// Configurar marked para mejores estilos
marked.setOptions({
  breaks: true,
  gfm: true,
})

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      // Convertir Markdown a HTML
      const htmlContent = marked(content)

      return {
        slug,
        content: htmlContent,
        ...data,
      } as BlogPost
    })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return null
    }

    const fullPath = path.join(postsDirectory, `${slug}.md`)
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Convertir Markdown a HTML
    const htmlContent = marked(content)

    return {
      slug,
      content: htmlContent,
      ...data,
    } as BlogPost
  } catch (error) {
    console.error('Error reading post:', error)
    return null
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''))
}