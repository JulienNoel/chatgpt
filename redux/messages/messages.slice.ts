import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type TMessages = {
  message: string,
}

type TMessageState = Partial<Record<string, TMessages>>

const initialState: TMessageState = { }  

export const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    createPost(state: TMessageState, action: PayloadAction<Record<string, TMessages>>) {
      ...state,
      ...action.payload
    },
    updatePost(state: TMessageState, action: PayloadAction<TMessages>) {

    },
    deletePost(state: TMessageState, action: PayloadAction<string>) {
      
    },
  },
})

export const { createPost, updatePost, deletePost } = messageSlice.actions
