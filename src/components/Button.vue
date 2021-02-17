<template>
  <g-link
    class="button is-secondary my-2"
    :to="link.path">
    {{ text }}
  </g-link>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: ''
    },
    link: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
