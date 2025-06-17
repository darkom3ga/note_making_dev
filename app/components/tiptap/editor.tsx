"use client"
import React, { useState } from 'react'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import EditorUI from './bubblemenu'
import { useEditable } from '@/app/components/editablelogic/EditableContext'
import { useEffect } from 'react'

interface TiptapEditorProps {
  initcontent: string
}


const TiptapEditor: React.FC<TiptapEditorProps> = ({ initcontent }) => {
  const { isEditable } = useEditable()

  const editor = useEditor({
    extensions: [StarterKit],
    content: initcontent|| '<p>Hello World!</p>',
    editable: isEditable,
  })

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable)
    }
  }, [isEditable, editor])

  return (
    <div>
      <EditorUI editor={editor} isEditable={isEditable} />
    </div>
  )
}

export default TiptapEditor
