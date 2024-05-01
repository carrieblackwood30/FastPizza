import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'React Pizza',
      component: () => import("@/components/main.vue"),
      meta: {
        title: 'React Pizza | Доставка пиццы '
      }
    },
    {
      path: '/cart',
      name: 'cart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.,
      component: () => import('../components/card.vue'),
      meta: {
        title: 'React Pizza | Корзина '
      }
    }
  ]
})

router.beforeEach((to) => {
  document.title = to.meta.title
})


export default router
