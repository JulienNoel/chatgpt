import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { messageSlice } from '../messages/messages.slice'

const rootReducer = combineReducers({messages: messageSlice.reducer})

export const store = configureStore({
  reducer: rootReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch