<template>
  <v-lazy-image
    :alt="alt"
    :src="src"
    :src-placeholder="placeholder" />
</template>

<script>
// Components
import VLazyImage from 'v-lazy-image'

export default {
  name: 'LazyImage',
  components: { VLazyImage },
  props: {
    image: {
      type: Object,
      default: () => ({})
    },
    alt: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: undefined
    },
    height: {
      type: Number,
      default: undefined
    },
    blur: {
      type: Number,
      default: undefined
    },
    quality: {
      type: Number,
      default: 85
    }
  },
  computed: {
    src () { return this.$image(this.image).size(this.width, this.height).blur(this.blur).quality(this.quality).url() },
    placeholder () {
      const height = this.height ? Math.ceil(this.height / 3) : 200
      const width = this.width ? Math.ceil(this.width / 3) : 150
      return this.$image(this.image).size(width, height).blur(10).quality(40).url()
    }
  }
}
</script>
