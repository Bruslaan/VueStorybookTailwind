import { linkTo } from '@storybook/addon-links';
import '../src/assets/index.css'

import Welcome from '../src/components/HelloWorld';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => ({
  components: { Welcome },
  template: '<welcome/>',
  methods: { action: linkTo('Button') },
});


export const ToStorybook2 = () => ({
  components: { Welcome },
  template: '<welcome/>',
  methods: { action: linkTo('Button') },
});

ToStorybook.story = {
  name: 'to Storybook',
};

ToStorybook2.story = {
  name: 'Dei Mudda',
};