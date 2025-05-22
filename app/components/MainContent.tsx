import DOMPurify from 'isomorphic-dompurify';
import { redirect } from 'next/navigation'


export default function MainContent({ title , content , userAccess ,session}: { title:string , content:any , userAccess:string ,session:any }) {
    const sanitizedContent = DOMPurify.sanitize(content);
    if (userAccess == session?.role) {
        return (
            <main className="prose prose-zinc dark:prose-invert prose-code:font-code dark:prose-code:bg-neutral-900 dark:prose-pre:bg-neutral-900 prose-code:bg-neutral-100 prose-pre:bg-neutral-100 prose-headings:scroll-m-20 w-[85vw] sm:w-full sm:mx-auto prose-code:text-sm prose-code:leading-6 dark:prose-code:text-white prose-code:text-neutral-800 prose-code:p-1 prose-code:rounded-md prose-pre:border pt-2 prose-code:before:content-none prose-code:after:content-none !min-w-full prose-img:rounded-md prose-img:border">
                <h1 className="text-3xl -mt-2">{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
            </main>
        );
    }
    else {
        redirect(`/unauthorized`) 
    ;}
}