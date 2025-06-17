import dbConnect from '@/lib/dbConnect';
import Page, { TypeScriptPage } from '@/dbmodels/page';
import { notFound } from 'next/navigation';
import {getServerSession } from 'next-auth'
import MainContent from '@/app/components/MainContent';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function PageBySlug({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const session = await getServerSession(authOptions);

    await dbConnect();

    const page = await Page.findOne({ slug }).lean<TypeScriptPage>();
    if (!page) return notFound();

    return (
    
    <MainContent inititle={page.title} content={page.content} userAccess={page.userAccess} session={session} date="date" author="RunicNotes" slug={slug} />

    );
}
