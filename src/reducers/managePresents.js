export function managePresents(state, action){
  switch (action.type) {
    case "INCREASE":
      return {numberOfPresents: state.numberOfPresents + 1}
    case "DECREASE":
      return 
    default: {numberOfPresents: state.numberOfPresents - 1}
      return state;
  }
}
