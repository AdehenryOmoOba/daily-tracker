import { useEffect, useState } from 'react'
import NewTodoForm from './NewTodoForm.jsx'
import TodoList from './TodoList.jsx'

function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    try {
      return JSON.parse(localValue)
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem.trim() === "") return
    addTodo(newItem.trim())
    setNewItem("")
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos =>
      currentTodos.map(todo =>
        todo.id === id ? { ...todo, completed } : todo
      )
    )
  }

  function deleteTodo(id) {
    setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id))
  }

  return (
    <>
      <NewTodoForm
        onAdd={title => addTodo(title)}
      />

      <h1 className="header">To Do List</h1>
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </>
  )
}

export default App
