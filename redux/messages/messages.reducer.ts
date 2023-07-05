const initialState = { type: action.messagesType,
                        payload: action.payload,
                    }

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'addMessage':
      return { ...state, value: state.payload }
    case 'getMessage':
      return { ...state, value:  state.payload }
    case 'deleteMessage':
      return { ...state, value:  state.payload }
    default:
      return state
  }
}

