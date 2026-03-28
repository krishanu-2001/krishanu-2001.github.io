export function processAdmonitions(markdown: string): string {
  const lines = markdown.split('\n')
  const result: string[] = []
  let i = 0

  while (i < lines.length) {
    const match = lines[i].match(/^!!!\s+(\w+)\s+"([^"]*)"/)
    if (match) {
      const type = match[1]
      const title = match[2]
      const contentLines: string[] = []
      i++
      while (i < lines.length && (lines[i].startsWith('    ') || lines[i].trim() === '')) {
        if (lines[i].trim() === '' && i + 1 < lines.length && !lines[i + 1].startsWith('    ')) {
          break
        }
        contentLines.push(lines[i].replace(/^ {4}/, ''))
        i++
      }
      const content = contentLines.join('\n').trim()
      result.push(`<div data-admonition="${type}" data-title="${title}">\n\n${content}\n\n</div>`)
    } else {
      result.push(lines[i])
      i++
    }
  }

  return result.join('\n')
}
