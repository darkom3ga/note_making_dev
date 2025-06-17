"use client"
import React from 'react'
import { EditorContent, BubbleMenu, FloatingMenu, Editor } from '@tiptap/react'

interface EditorUIProps {
  editor: Editor | null
  isEditable: boolean
}

const EditorUI: React.FC<EditorUIProps> = ({ editor, isEditable }) => {
  return (
    <>
      <div className="control-group">
      </div>

      {editor && (
        <>
          <FloatingMenu editor={editor}>
            This is the floating menu
          </FloatingMenu>

          <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
            <div className="bubble-menu">
              <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'is-active' : ''}
              >
                Bold
              </button>
              <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'is-active' : ''}
              >
                Italic
              </button>
              <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? 'is-active' : ''}
              >
                Strike
              </button>
            </div>
          </BubbleMenu>
        </>
      )}

      <EditorContent editor={editor} />
    </>
  )
}

export default EditorUI
