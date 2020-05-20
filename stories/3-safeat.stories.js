import { linkTo } from '@storybook/addon-links';
import '../src/assets/index.css' 


import Welcome from '../src/components/Safeeat';

export default {
  title: 'Safeeat',
  component: Welcome,
};

export const ToStorybook = () => ({
  components: { Welcome },
  template: '<div class=""><welcome/></div>',
  methods: { action: linkTo('Button') },
});


ToStorybook.story = {
  name: 'Safeeat',
};
