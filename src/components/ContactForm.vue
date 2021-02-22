<template>
  <form
    class="form"
    data-netlify="true"
    data-netlify-recaptcha="true"
    @submit.prevent="handleSubmit">
    <div class="field">
      <div class="control">
        <label
          for="Name"
          class="label">
          <input
            id="Name"
            v-model="form.Name"
            type="text"
            class="input"
            name="Name"
            placeholder="Enter your name">
        </label>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data: () => ({
    form: {},
    state: {
      loading: false,
      success: false,
      error: false
    }
  }),
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[ key ]))
        .join('&')
    },
    async handleSubmit () {
      try {
        this.state = { loading: true, error: false, success: false }

        await this.$recaptchaLoaded()
        const token = await this.$recaptcha('contact')

        const res = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encode({
            'form-name': 'Contact Form',
            'g-recaptcha-response': token,
            ...this.form
          })
        })

        if (!res.ok) throw new Error('Something went wrong. Please try again...')
        this.state = { loading: false, success: true, error: false }
      } catch (error) {
        console.error(error)
        this.state = {
          loading: false,
          success: false,
          error: error.message
        }
      }
    }
  }
}
</script>
