import  {createSlice, nanoid} from '@reduxjs/toolkit'

//first step should be of initail state

const initialState={
    todos: []
}

export const TodoSlice=createSlice({
        name: "todo",
        initialState,
        reducers: {
            addtodo: (state,action)=>{
                const todo={
                    id:nanoid() ,//for unique id
                    text:action.payload
                }
                state.todos.push(todo)
            },
            removetodo: (state,action)=>{
                state.todos=state.todos.filter((todo)=>{
                    return todo.id!== action.payload
                }) 
            },

        }
})

export const {addtodo,removetodo}=TodoSlice.actions
export default TodoSlice.reducer