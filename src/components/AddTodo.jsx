import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addtodo} from '../features/Todo/TodoSlice'
function AddTodo() {
  const [input,setinput]=useState('')  
  const dispatch=useDispatch()
  const addTodoHandler=(e)=>{
    e.preventDefault()
    dispatch(addtodo(input))
    setinput('')
  }
  return (
    <form  className="mt-12 space-x-3" onSubmit={addTodoHandler}>
    <input
        type="text"
        placeholder="Write a Todo..."
        className="px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
        value={input}
        onChange={(e)=>setinput(e.target.value)}
    />
    <button type="submit" className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
        Add Todo
    </button>
</form>
  )
}

export default AddTodo
