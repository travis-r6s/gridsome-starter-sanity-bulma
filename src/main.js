// Plugins
import image from '~/image'
import { VueReCaptcha } from 'vue-recaptcha-v3'

// Layouts
import DefaultLayout from '~/layouts/Default.vue'

// Components
import LazyImage from '~/components/LazyImage.vue'
import BlockContent from 'sanity-blocks-vue-component'

// Styles
import '@/styles/main.scss'

export default function (Vue, { isClient }) {
  // Components
  Vue.component('Layout', DefaultLayout)
  Vue.component('LazyImage', LazyImage)
  Vue.component('BlockContent', BlockContent)

  // Plugins
  Vue.use(image)

  if (isClient) {
    Vue.use(VueReCaptcha, {
      siteKey: process.env.GRIDSOME_SITE_RECAPTCHA_KEY,
      loaderOptions: { autoHideBadge: true }
    })
  }
}
