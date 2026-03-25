import { useState } from 'react'

type State = {
    selectedTag: number | null,
    tags: { id: number; value: string }[]
}

const Pitfall = () => {
    const [items, setItems] = useState<State>({
        tags: [],
        selectedTag: null,
    });

    return (
        <>
            <button onClick={f => f} className="btn-default">Add Tag</button>

            <ul>
                {items.tags.map(t => <li
                    style={{ color: t.id === items.selectedTag ? "red" : '' }}
                    onClick={f => f}
                    key={t.id}>{t.value}</li >)
                }
            </ul>
        </>
    )
}

export default Pitfall