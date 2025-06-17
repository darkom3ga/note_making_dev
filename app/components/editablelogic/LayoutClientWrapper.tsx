'use client'

import { EditableProvider } from './EditableContext'

export default function LayoutClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <EditableProvider>
      {children}
    </EditableProvider>
  )
}
