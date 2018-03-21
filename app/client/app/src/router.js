import Vue from 'vue'
import Router from 'vue-router'

import Navbar from './components/Navbar'
import SubNavbar from './components/SubNavbar'

import PageOne from './views/PageOne'
import PageTwo from './views/PageTwo'
import Login from './views/Login'

import Bracket from './views/Bracket'
import Index from './views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        navbar: Navbar,
        subnavbar: SubNavbar,
        main: Index
      }
    },
    {
      path: '/one',
      components: {
        navbar: Navbar,
        subnavbar: SubNavbar,
        main: PageOne
      }
    },
    {
      path: '/two',
      components: {
        navbar: Navbar,
        subnavbar: SubNavbar,
        main: PageTwo
      }
    },
    {
      path: '/bracket',
      components: {
        navbar: Navbar,
        subnavbar: SubNavbar,
        main: Bracket
      }
    }

  ]
})
