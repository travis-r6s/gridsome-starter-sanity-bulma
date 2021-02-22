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
    <div class="field">
      <div class="control">
        <vue-recaptcha
          ref="recaptcha"
          :sitekey="siteKey"
          :load-recaptcha-script="true"
          @verify="recaptcha = $event" />
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button
          type="submit"
          class="button is-primary is-outlined"
          :class="{'is-loading': state.loading}"
          :disabled="state.loading">
          Submit
        </button>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <p
          v-if="state.error"
          class="help is-danger">
          {{ state.error }}
        </p>
        <p
          v-if="state.success"
          class="help is-success">
          Successfully sent!
        </p>
      </div>
    </div>
  </form>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'

export default {
  name: 'ContactForm',
  components: { VueRecaptcha },
  data: () => ({
    siteKey: process.env.GRIDSOME_SITE_RECAPTCHA_KEY,
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
        if (!this.recaptcha) throw new Error('Please complete the reCaptcha')
        this.state = { loading: true, error: false, success: false }

        const res = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encode({
            'form-name': 'Contact Form',
            'g-recaptcha-response': this.recaptcha,
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
