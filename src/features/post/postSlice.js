import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'Alan Jackson', content: 'Its 5 Oclock Somewhere is one of the best songs of Alan Jackson' },
    { id: '2', title: 'George Strait', content: 'George Strait is the king of country music and never gets old' }
]

const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded(state, action){
            state.push(action.payload)
        }

    }
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;