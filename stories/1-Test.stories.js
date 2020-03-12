import { linkTo } from '@storybook/addon-links';


import Welcome from '../src/components/TestComponent';

export default {
  title: 'Test',
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
  name: 'to Storybook2',
};

ToStorybook2.story = {
  name: 'Dei Mudda2',
};