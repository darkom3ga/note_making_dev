"use client"
import DOMPurify from 'isomorphic-dompurify';
import { redirect } from 'next/navigation'
import Tiptap from '@/app/components/tiptap/editor'
import { useState ,useCallback } from 'react';
import { useEditable } from '@/app/components/editablelogic/EditableContext'

const saveContent = async ({ slug, title, content }: { slug: string, title: string, content: string }) => {
  await fetch('/api/autosave', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slug, title, content })
  })
}

export default function MainContent(
    { inititle , content , userAccess ,session ,date , author , slug }: 
    { inititle:string , content:any , userAccess:string ,session:any , date:string , author:string ,  slug: string}) {
    const sanitizedContent = DOMPurify.sanitize(content);
    const { isEditable } = useEditable()
    const [title, setTitle] = useState(inititle)

    if (userAccess == session?.role || true) {
        return (
            <div className="prose prose-zinc dark:prose-invert prose-code:font-code dark:prose-code:bg-neutral-900 
                dark:prose-pre:bg-neutral-900 prose-code:bg-neutral-100 prose-pre:bg-neutral-100 prose-headings:scroll-m-20
                w-[85vw] sm:w-full sm:mx-auto prose-code:text-sm prose-code:leading-6 dark:prose-code:text-white prose-code:text-neutral-800
                prose-code:p-1 prose-code:rounded-md prose-pre:border pt-2 prose-code:before:content-none 
                prose-code:after:content-none !min-w-full prose-img:rounded-md prose-img:border">
                <div className="flex items-center gap-1 ">
                    <p className="text-sm text-gray-500">{new Date(date).toDateString()}</p>
                </div>
                {isEditable ? (
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter Title Here"
                    className="w-full text-[44px] font-bold bg-transparent mt-1  p-0 m-0 leading-none outline-none border-none placeholder:text-neutral-400"
                    />):(
                       <h1 className="text-[44px] font-bold mt-2 mb-1 p-0 m-0 leading-none">{title}</h1> 
                    )
                }
                <div className="flex items-center ">
                    <p className="text-sm text-gray-500 mt-4 mb-4">{author || "hell"}</p>
                </div>
                <div className="border-b-1 border-gray-700 mb-10"> </div>
                <Tiptap initcontent = {sanitizedContent}/>

                {/* <div id="content" dangerouslySetInnerHTML={{ __html: sanitizedContent }} /> */}
            </div>
        );
    }
    else {
        redirect(`/unauthorized`) 
    ;}
}