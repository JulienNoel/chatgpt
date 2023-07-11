import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import ChatMessage from '../../components/navigation/chatMessage'



type TMessageState = Partial<Record<string, typeof ChatMessage>>

const initialState: TMessageState = { }  

export const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    createPost(state: TMessageState, action: PayloadAction<Record<string, typeof ChatMessage>>) {
     return {
      ...state,
      ...action.payload
     }
    },
    updatePost(state: TMessageState, action: PayloadAction<TMessages>) {

    },
    deletePost(state: TMessageState, action: PayloadAction<string>) {
      
    },
  },
})

export const { createPost, updatePost, deletePost } = messageSlice.actions
