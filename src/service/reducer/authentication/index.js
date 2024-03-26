import { appActions } from "../../action";
const initialState = {

};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    //Sign up
    case `${appActions.REGISTER}_START`:
      return { ...state, isSignUp: true };
    case `${appActions.REGISTER}_SUCCESS`:
      return { ...state, isSignUp: false, };
    case `${appActions.REGISTER}_FAIL`:
      return { ...state, isSignUp: false,  };
      
    default:
      return { ...state };
  }
};
