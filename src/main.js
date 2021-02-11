// Layouts
import DefaultLayout from '~/layouts/Default.vue'

// Styles
import '@/styles/main.scss'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
}
