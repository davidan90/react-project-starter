import { LOGIN_LOGGED, LOGIN_USER } from '../../../constants/actions';

const INITIAL_STATE = {
    logged: false,
    data: {
        user: undefined,
    },
}
export default function login(state = INITIAL_STATE, { type, playload }) {
    const newState = Object.assign({}, state);
    switch (type) {

        case LOGIN_LOGGED:
            newState.logged = playload.logged;
            break;

        case LOGIN_USER:
            newState.data.user = playload.user;
            break;

        default:
            break;
    }
    return newState;
};