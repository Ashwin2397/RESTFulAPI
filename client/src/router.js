import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './views/LandingPage.vue'
import IndexPage from './views/trees/IndexPage.vue'
import EditPage from './views/trees/EditPage.vue'
import NewPage from './views/trees/NewPage.vue'
import ShowPage from './views/trees/ShowPage.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPage
    },
    {
      path: '/trees',
      name: 'index-page',
      component: IndexPage
    },
    {
      path: '/trees/new',
      name: 'new-page',
      component: NewPage
    },
    {
      path: '/trees/:id',
      name: 'show-page',
      component: ShowPage
    },
    {
        path: '/trees/:id/edit',
        name: 'edit-page',
        component: EditPage
    }
  ]
})
