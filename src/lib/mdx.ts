import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags?: string[];
  author: string;
  content: string; // raw MDX content
}

/**
 * Parse a date string like "June 18, 2026" into a Date for sorting.
 */
function parseDate(dateStr: string): Date {
  return new Date(dateStr);
}

/**
 * Read all .md files from the content/blog directory.
 * Returns an array of post metadata (without rendered content), sorted newest first.
 */
export function getAllPosts(): Omit<BlogPost, 'content'>[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'));

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title as string,
      excerpt: data.excerpt as string,
      date: data.date as string,
      readTime: data.readTime as string,
      category: data.category as string,
      tags: (data.tags as string[]) || [],
      author: (data.author as string) || 'WeeSpaces Team',
    };
  });

  // Sort by date, newest first
  return posts.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
}

/**
 * Read a specific .md file by slug, parse frontmatter,
 * and convert the markdown/HTML body to HTML using remark + remark-html.
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title as string,
    excerpt: data.excerpt as string,
    date: data.date as string,
    readTime: data.readTime as string,
    category: data.category as string,
    tags: (data.tags as string[]) || [],
    author: (data.author as string) || 'WeeSpaces Team',
    content: content,
  };
}
