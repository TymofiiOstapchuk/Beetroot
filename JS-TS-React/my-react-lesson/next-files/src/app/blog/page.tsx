import prisma from '@/utils/db'
import Link from 'next/link'
import Entry from '@/app/blog/_components/Entry'

export default async function BlogPage() {
    const data = await prisma.blog.findMany();

    return <>
        <h1>Blog page</h1>
        <div className='mb-1'>
            <Link href="/blog/new" className='btn btn_primary'>Add new</Link>
        </div>
        <hr />
        {data && data.map(entry => <Entry key={entry.id} entry={entry} />)}
    </>;
}