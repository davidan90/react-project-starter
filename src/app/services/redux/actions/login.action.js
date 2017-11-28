import { LOGIN_LOGGED } from '../../../constants/actions';

const setLoginLogged = (logged) => ({
  type: LOGIN_LOGGED,
  playload: {
    logged,
  }
});

export const LoginActions = {
    setLoginLogged
};