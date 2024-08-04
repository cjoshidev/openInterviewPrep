
import { useState, useEffect } from 'react'
import supabase from '@/utils/supabase'

function SupaBasePage() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        async function getTodos() {
            const { data } = await supabase.from('todos').select()
            console.log(data)
        }

        getTodos()
    }, [])

    return (
        <div>
            {todos.map((todo) => (
                <li key={todo}>{todo}</li>
            ))}
        </div>
    )
}
export default SupaBasePage
