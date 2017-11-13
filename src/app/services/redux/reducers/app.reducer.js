import { CONTAINERS } from '../../../constants/containers';
import { APP_RESIZE } from '../../../constants/actions';

const getDevice = (width) => {
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
    section: {
        containers: CONTAINERS,
        selected: '',
    },
    device: '',
};
export default function app(state = INITIAL_STATE, { type, playload }) {
    switch (type) {
        case APP_RESIZE:
            const device = getDevice(playload.width);
            return Object.assign({}, state, {device});
        default:
            return state;
    }
};