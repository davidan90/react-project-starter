import { APP_RESIZE } from '../constants';

const setDevice = (width) => {
  return {
    type: APP_RESIZE,
    playload: {
      width,
    }
  }
}

export const AppActions = {
  setDevice,
};