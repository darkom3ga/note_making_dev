'use client'

import { createContext, useContext, useState } from 'react'

const EditableContext = createContext<{
  isEditable: boolean
  setIsEditable: (value: boolean) => void
} | null>(null)

export function EditableProvider({ children }: { children: React.ReactNode }) {
  const [isEditable, setIsEditable] = useState(true)
  return (
    <EditableContext.Provider value={{ isEditable, setIsEditable }}>
      {children}
    </EditableContext.Provider>
  )
}

export function useEditable() {
  const context = useContext(EditableContext)
  if (!context) {
    throw new Error('useEditable must be used within EditableProvider')
  }
  return context
}
