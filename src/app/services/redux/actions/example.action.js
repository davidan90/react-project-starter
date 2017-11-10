import { CLICK_EXAMPLE } from '../constants';

const clickExample = (data) => {
  return {
    type: CLICK_EXAMPLE,
    playload: data,
  }
}

export const ExampleActions = {
  clickExample,
};