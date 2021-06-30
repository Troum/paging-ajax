/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import middlewarePipeline from "./middlewarePipeline";
import auth from "./middlewares/auth";
import store from '../store'
import Dashboard from "../views/dashboard/Dashboard";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: {
      middleware: [
        auth
      ]
    },
    children: [
      {
        path: '',
        component: () => import('../views/dashboard/Tiles.vue'),
        name: 'dashboard',
        meta: {
          middleware: [
            auth
          ]
        }
      },
      {
        path: '/tiles/create',
        component: () => import('../views/dashboard/Create.vue'),
        name: 'dashboard.create',
        meta: {
          middleware: [
            auth
          ]
        }
      },
      {
        path: '/tiles/:id/update',
        component: () => import('../views/dashboard/Update.vue'),
        name: 'dashboard.update',
        meta: {
          middleware: [
            auth
          ]
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach(async (to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }
  const middleware = to.meta.middleware
  const context = {
    to,
    from,
    next,
    store
  }
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
})

export default router
