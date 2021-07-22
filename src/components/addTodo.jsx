import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

function AddTodo({addTodo}) {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
    setValue(e.target.value)
  }

  const handleAdd = () => {
    setValue('')
    addTodo(value)
  }

  return (
    <div>
      <input type="text" onChange={handleOnChange} value={value} placeholder="You text here" className="todo-field"/>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default connect(null, { addTodo })(AddTodo)
