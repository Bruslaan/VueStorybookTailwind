import { linkTo } from '@storybook/addon-links';
import '../src/assets/index.css' 


import Welcome from '../src/components/TestComponent';

export default {
  title: 'First Component',
  component: Welcome,
};

export const ToStorybook = () => ({
  components: { Welcome },
  template: '<welcome/>',
  methods: { action: linkTo('Button') },
});


ToStorybook.story = {
  name: 'First Component',
};
