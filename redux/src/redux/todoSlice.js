import {createSlice} from "@reduxjs/toolkit"

const todoSlice = createSlice ({
    name: "todo" , 
    initialState: [], 
    reducers: {
        todoAdded: (state , action) => {
            state.push({
                text: action.payload,
                completed: false
            })
        },
        todoToggled: (state , action) => {
            state[action.payload].completed = !state[action.payload].completed
        }
    }
})

export const {todoAdded , todoToggled} = todoSlice.actions
export default todoSlice.reducer