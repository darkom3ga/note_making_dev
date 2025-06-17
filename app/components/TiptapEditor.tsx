'use client'

import { useEffect, useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'

export default function TiptapEditor() {
  const [isMounted, setIsMounted] = useState(false)

  const editor = useEditor({
    extensions: [StarterKit, Highlight],
    content: '<p>Hello from Tiptap!</p>',
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted || !editor) return null

  return (
    <div className="p-4 border rounded">
      {/* Toolbar */}
      <div className="mb-2 space-x-2">
        <button onClick={() => editor.chain().focus().toggleBold().run()}>
          Bold
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}>
          Italic
        </button>
        <button onClick={() => editor.chain().focus().toggleHighlight().run()}>
          Highlight
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
          H1
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          H2
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
          H3
        </button>
        <button onClick={() => editor.chain().focus().setParagraph().run()}>
          Paragraph
        </button>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} className="border min-h-[150px] p-3 rounded" />
    </div>
  )
}
