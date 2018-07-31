export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
    // using object spread ... to get the new states instead of Object.assign
      return { ...state,  friends: state.friends.concat(action.friend)  }
    case "REMOVE_FRIEND":
      let newFriends = state.friends.filter(friend => friend.id !== action.id)
      return { ...state, friends: newFriends }
    default:
      return state
  }
}
