import { linkTo } from '@storybook/addon-links';


import Vanila from '../src/components/VanillaLanding';
import Navbar from '../src/components/navBar'
import HeaderComponent from '../src/components/Header'

export default {
  title: 'Vanilla',
  components: {Vanila, Navbar, HeaderComponent},
};

export const ToStorybook = () => ({
  components: { Vanila },
  template: '<div class=""><Vanila/></div>',
  methods: { action: linkTo('Button') },
});

export const NavBar = () => ({
  components: { Navbar },
  template: '<div class=""><Navbar/></div>',
  methods: { action: linkTo('Button') },
});

export const Head = () => ({
  components: { HeaderComponent },
  template: '<div class=""><HeaderComponent/></div>',
  methods: { action: linkTo('Button') },
});


ToStorybook.story = {
  name: 'Vanilla Landing Page',
};

NavBar.story ={
  name: 'NavBar'
}

Head.story={
  name: "Header Compnent"
}
