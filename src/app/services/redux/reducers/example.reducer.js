import { CLICK_EXAMPLE } from '../../../constants/actions';

const INITIAL_STATE = {
    click: {},
};
export default function example(state = INITIAL_STATE, {type, playload}) {
    switch (type) {
        case CLICK_EXAMPLE:
          return Object.assign({}, state, playload);
        default:
          return state;
      }
};
