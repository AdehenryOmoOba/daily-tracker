import { useState } from 'react'

function NewTodoForm({ onAdd }) {
  const [title, setTitle] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = title.trim()
    if (trimmed === "") return
    onAdd(trimmed)
    setTitle("")
  }

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          id="item"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}

export default NewTodoForm


