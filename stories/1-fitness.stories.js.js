import { linkTo } from '@storybook/addon-links';
import '../src/assets/index.css' 


import Fitness from '../src/components/Fitness';

export default {
  title: 'Fitness',
  component: Fitness,
};

export const ToStorybook = () => ({
  components: { Fitness },
  template: '<div class=""><Fitness/></div>',
  methods: { action: linkTo('Button') },
});


ToStorybook.story = {
  name: 'Fitness Component',
};
