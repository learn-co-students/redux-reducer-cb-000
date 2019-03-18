export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":
      let newFriends = state.friends.filter(function(f){
        if(f.id !== action.id){
          return f
        }
      })
      return {friends: newFriends}
    default:
      return state;
  }
}
