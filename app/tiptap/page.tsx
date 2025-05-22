// "use client"
// // app/page.tsx (or app/editor/page.tsx)
// import dynamic from 'next/dynamic'

// // Dynamically import without SSR
// const TiptapEditor = dynamic(() => import('@/app/components/TiptapEditor'), {
//   ssr: false,
// })

// export default function Page() {
//   return (
//     <main className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Tiptap Editor</h1>
//       <TiptapEditor />
//     </main>
//   )
// }
"use client"
// app/page.tsx
import dynamic from 'next/dynamic';

const ResizableSidebar = dynamic(() => import('../components/ResizableSidebar'), {
  ssr: false, // required for drag+resize behavior
});

export default function Home() {
  return <ResizableSidebar />;
}
