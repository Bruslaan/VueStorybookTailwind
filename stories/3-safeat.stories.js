import { linkTo } from '@storybook/addon-links';
import '../src/assets/index.css'


import Welcome from '../src/components/Safeeat';
import Login from '../src/components/LoginComponent';
import Menu from '../src/components/MenuComponent';

export default {
  title: 'Safeeat',
  components: { Login, Welcome, Menu },
};



export const ToStorybook = () => ({
  components: { Welcome },
  template: '<div class=""><welcome/></div>',
  methods: { action: linkTo('Button') },
});


export const LoginPage = () => ({
  components: { Login },
  template: '<div class=""><Login/></div>',
  methods: { action: linkTo('Button') },
});



export const MenuPage = () => ({
  components: { Menu },
  template: '<div class=""><Menu/></div>',
  methods: { action: linkTo('Button') },
});



ToStorybook.story = {
  name: 'Safeeat',
};

LoginPage.story = {
  name: 'Login Page',
};
