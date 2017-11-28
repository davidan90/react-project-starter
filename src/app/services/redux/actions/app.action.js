import { APP_RESIZE, APP_CHANGE_SECTION_SELECTED, APP_OPEN_ASIDE } from '../../../constants/actions';

const setDevice = (size) => ({
  type: APP_RESIZE,
  playload: {
    size,
  }
});

const setSectionSelected = (selected) => ({
  type: APP_CHANGE_SECTION_SELECTED,
  playload: {
    selected,
  }
})

const openAside = (open) => ({
  type: APP_OPEN_ASIDE,
  playload: {
    open,
  }
});

export const AppActions = {
  setDevice,
  setSectionSelected,
  openAside,
};