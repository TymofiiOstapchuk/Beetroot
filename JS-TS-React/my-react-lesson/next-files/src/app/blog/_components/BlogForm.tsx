"use client"

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { createEntry } from '@/app/blog/actions'
import { Blog } from '@prisma/client'

const initialState = {
    message: '',
    errors: { title: '', text: '' }
}


function SubmitButton() {
    const { pending } = useFormStatus();

    return <div className="button-wrap">
        <button className="btn btn_primary"
            disabled={pending}
        >Add</button>
    </div>
}


export default function BlogForm({ entry }: { entry?: Blog }) {
    const [state, formAction] = useActionState(createEntry, initialState)


    return <form action={formAction} className="form">
        {state?.message && <p>{state.message}</p>}

        {entry?.id && <input type="hidden" value={entry.id} name="id" />}


        <label htmlFor="title">
            <input type="text" name="title" id="title"
                defaultValue={entry?.title || ''}
            />
            {state?.errors?.title && <p>{state.errors.title}</p>}
        </label>

        <label htmlFor="text">
            <textarea id="text" name="text" defaultValue={entry?.text || ''}></textarea>
            {state?.errors?.text && <p>{state.errors.text}</p>}
        </label>
        <SubmitButton />


    </form>;
}