import { appActions } from "..";

export const registerAction = payload => ({
  type: appActions.REGISTER,
  payload
});

export const loginAction = payload => ({
  type: appActions.LOGIN,
  payload
})

export const getUserAction=payload=>({
  type:appActions.GET_USER,
  payload
})