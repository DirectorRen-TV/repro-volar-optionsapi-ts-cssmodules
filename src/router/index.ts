import { createRouter, createWebHistory } from 'vue-router'
import OptionsCSSModule from '../views/options-cssmodule.vue'
import OptionsScopedCSS from '../views/options-scopedcss.vue'
import CompositionCSSModule from '../views/composition-cssmodule.vue'
import CompositionScopedCSS from '../views/composition-scopedcss.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/options-scoped',
      name: 'options-scoped',
      component: OptionsScopedCSS
    },
    {
      path: '/options-module',
      name: 'options-module',
      component: OptionsCSSModule
    },
    {
      path: '/composition-scoped',
      name: 'composition-scoped',
      component: CompositionScopedCSS
    },
    {
      path: '/composition-module',
      name: 'composition-module',
      component: CompositionCSSModule
    }
  ]
})

export default router
