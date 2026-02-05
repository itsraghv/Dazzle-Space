import { createHighlighter, HighlighterCore } from 'shiki'

let highlighter: HighlighterCore | null = null;

export async function highlight(code: string, lang: string = 'typescript') {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ['github-dark'],
      langs: ['typescript', 'javascript', 'tsx', 'jsx', 'bash', 'json', 'css', 'html'],
    })
  }

  return highlighter.codeToHtml(code, {
    lang,
    theme: 'github-dark',
  })
}
