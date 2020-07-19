import React, { useState, useMemo, useCallback, useRef } from 'react'

interface IUser {
    name: string
    login: string
    avatar_url: string
}

const App: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [users, setUsers] = useState<IUser[]>()

    // async function loadData() {
    //     const response = await fetch('https://api.github.com/users/wagnerbrum')
    //     const data = await response.json()

    //     setUser(data)
    // }

    const names = useMemo(() => users?.map((user) => name).join(', ') || '', [
        users,
    ])

    const greeting = useCallback((name: string) => alert(`Hello ${name}`), [])

    inputRef.current?.focus() // se não for null, da focus

    function focusOnInput() {
        inputRef.current!.focus() // da focus pq eu garanto que nunca vai estar nullo
    }

    return (
        <form action="">
            <input type="text" ref={inputRef} />
        </form>
    )
}

export default App
