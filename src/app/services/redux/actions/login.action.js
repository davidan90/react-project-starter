import { LOGIN_LOGGED, LOGIN_USER } from '../../../constants/actions';

const setLoginLogged = (logged) => ({
  type: LOGIN_LOGGED,
  playload: {
    logged,
  }
});

const setLoginUser = (user) => ({
  type: LOGIN_USER,
  playload: {
    user,
  }
})

export const LoginActions = {
    setLoginLogged,
    setLoginUser,
};