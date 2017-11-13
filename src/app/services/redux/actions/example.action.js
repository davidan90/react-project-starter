import { CLICK_EXAMPLE } from '../../../constants/actions';

const clickExample = (data) => {
  return {
    type: CLICK_EXAMPLE,
    playload: data,
  }
}

export const ExampleActions = {
  clickExample,
};