import { appActions } from "../../action";
const initialState = {

};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    //Sign up
    case `${appActions.GET_USER}_SUCCESS`:
      return { ...state, user: action?.payload?.user, };
      
    default:
      return { ...state };
  }
};
