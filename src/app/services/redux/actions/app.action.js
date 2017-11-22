import { APP_RESIZE, APP_OPEN_ASIDE } from '../../../constants/actions';

const setDevice = (width) => ({
  type: APP_RESIZE,
  playload: {
    width,
  }
});

const openAside = (open) => ({
  type: APP_OPEN_ASIDE,
  playload: {
    aside: {
      open
    }
  }
});

export const AppActions = {
  setDevice,
  openAside,
};