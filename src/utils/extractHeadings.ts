export interface Heading {
  id: string
  text: string
  level: 2 | 3
}

export function extractHeadings(markdown: string): Heading[] {
  const regex = /^(#{2,3})\s+(.+)$/gm
  const headings: Heading[] = []
  let match
  while ((match = regex.exec(markdown)) !== null) {
    const text = match[2]
      .replace(/\*\*/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .trim()
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
    headings.push({ id, text, level: match[1].length as 2 | 3 })
  }
  return headings
}
