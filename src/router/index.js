import { createRouter, createWebHashHistory } from 'vue-router'
import Objective from '../views/Objective.vue'
import Contact from '../views/Contact.vue'
import Publications from '../views/Publications.vue'
import Research from '../views/Research.vue'

const routes = [
  {
    path: '/',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
      { path: '', component: Objective },
      { path: 'research', component: Research },
      { path: 'contact', component: Contact },
      { path: 'publications', component: Publications },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
