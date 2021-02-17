import imageUrlBuilder from '@sanity/image-url'

export default {
  install: Vue => {
    const builder = imageUrlBuilder({ dataset: process.env.GRIDSOME_SANITY_DATASET, projectId: process.env.GRIDSOME_SANITY_PROJECT_ID })

    Vue.prototype.$image = source => builder.image(source).auto('format')
  }
}
