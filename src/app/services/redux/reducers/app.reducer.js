import { CONTAINERS } from '../../../constants/containers';
import { APP_RESIZE, APP_OPEN_ASIDE } from '../../../constants/actions';

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
        selected: '',
    },
    device: {
        type: '',
        size: '',
    },
};
export default function app(state = INITIAL_STATE, { type, playload }) {
    switch (type) {
        case APP_RESIZE:
            playload.device.type = getDeviceType(playload.device.size);
            return Object.assign({}, state, playload);
        case APP_OPEN_ASIDE:
            return Object.assign({}, state, playload);
        default:
            return state;
    }
};