import { CONTAINERS } from '../../../constants/containers';
import { APP_RESIZE, APP_CHANGE_SECTION_SELECTED, APP_OPEN_ASIDE } from '../../../constants/actions';

const getDeviceType = (width) => {
    switch (true) {
        case width >= 1025:
            return 'desktop';
        case width < 1025 && width >= 600:
            return 'tablet';
        case width < 600:
            return 'mobile';
        default:
            return 'desktop';
    }
}

const INITIAL_STATE = {
    aside: {
        open: false,
    },
    section: {
        containers: CONTAINERS,
        selected: undefined,
    },
    device: {
        type: undefined,
        size: undefined,
    },
};
export default function app(state = INITIAL_STATE, { type, playload }) {
    const newState = Object.assign({}, state);
    switch (type) {

        case APP_RESIZE:
            newState.device.type = getDeviceType(playload.size);
            newState.device.size = playload.size;
            break;

        case APP_CHANGE_SECTION_SELECTED:
            newState.section.selected = playload.selected;
            break;

        case APP_OPEN_ASIDE:
            newState.aside.open = playload.open;
            break;

        default:
            break;
    }
    return newState;
};