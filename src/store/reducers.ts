const initialState = {
  value: 0,
  users: [],
};
export function countReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case "INC":
      return {
        value: state.value + 1,
      };
    case "DEC":
      return {
        value: state.value - 1,
      };
    default:
      return state;
  }
}

export const usersReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.res,
      };
    default:
      return state;
  }
};
