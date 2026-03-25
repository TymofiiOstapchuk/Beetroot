import prisma from '@/utils/db'
import BlogForm from '@/app/blog/_components/BlogForm'

type Params = Promise<{ id: string }>;


export default async function EditBlogEntry(props: { params: Params }) {
    const params = await props.params;
    const id = +params.id

    const entry = await prisma.blog.findUnique({
        where: {
            id
        }
    })

    if (!entry) {
        return null;
    }

    return <BlogForm entry={entry} />;
}