import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type MessagesState = {
  value: number
}

const initialState: MessagesState = { value: 0 }  

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    createPost(state, action) {},
    updatePost(state, action) {},
    deletePost(state, action) {},
  },
})

export const { createPost, updatePost, deletePost } = messageSlice.actions
export default messageSlice.reducer