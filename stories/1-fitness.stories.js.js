import { linkTo } from '@storybook/addon-links';

import Fitness from '../src/components/Fitness';
import FitnessHomeScreen from '../src/components/FitnessHome';

export default {
  title: 'Fitness',
  component: Fitness,
};

export const ToStorybook = () => ({
  components: { Fitness },
  template: '<div class=""><Fitness/></div>',
  methods: { action: linkTo('Button') },
});


export const FitnessHome = () => ({
  components: { FitnessHomeScreen },
  template: '<div class=""><FitnessHomeScreen/></div>',
  methods: { action: linkTo('Button') },
});


ToStorybook.story = {
  name: 'Fitness Component',
};
