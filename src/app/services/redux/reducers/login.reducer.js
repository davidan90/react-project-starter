import { LOGIN_LOGGED } from '../../../constants/actions';

const INITIAL_STATE = {
    logged: false,
    data: undefined,
}
export default function login(state = INITIAL_STATE, { type, playload }) {
    const newState = Object.assign({}, state);
    switch (type) {
        
        case LOGIN_LOGGED:
            newState.logged = playload.logged;
            break;

        default:
            break;
    }
    return newState;
};