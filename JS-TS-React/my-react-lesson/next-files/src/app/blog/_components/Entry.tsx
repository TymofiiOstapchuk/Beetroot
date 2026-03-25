"use client";
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { deleteEntry } from '@/app/blog/actions'
import { Blog } from '@prisma/client'
import Link from 'next/link';

const initState = {
    message: ''
}

const DeleteButton = () => {
    const { pending } = useFormStatus();
    return <button disabled={pending} className='btn btn_danger'>Delete</button>

}


const DeleteForm = ({ id }: { id: number }) => {
    const [state, formAction] = useActionState(deleteEntry, initState)

    return <form action={formAction}>
        <DeleteButton />
        <input type="hidden" value={id} name="id" />
        {state.message && <p>{state.message}</p>}
    </form>
}


export default function Entry({ entry }: { entry: Blog }) {
    return <>
        <h2><Link href={`/blog/${entry.id}`}>{entry.title}</Link></h2>
        <p>{entry.text}</p>
        <DeleteForm id={entry.id} />
    </>;
}