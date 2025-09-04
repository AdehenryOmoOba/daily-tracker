import TodoItem from './TodoItem.jsx'

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No To-Dos"}
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TodoList


