<template>
  <div class="container">
    <div class="row logo-div">
      <div class="col-md-4 offset-md-4 col-sm-12">
        <img src="@/assets/logo.png" height="80px" class="img-responsive"/>
      </div>
    </div>
    <div class="row">
    </div>
    <div class="row">
      <div class="col-md-4 offset-md-4 col-sm-12">
        <form id="signup-form" v-on:submit.prevent="handleSignUp">
          <div class="form-group col-12">
            <input
              class="form-control"
              v-model="input.first_name"
              type="text"
              placeholder="First Name"
              required
            />
          </div>
          <div class="form-group col-12">
            <input
              class="form-control"
              v-model="input.last_name"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
          <div class="form-group col-12">
            <input
            class="form-control"
            v-model="input.email"
            type="email"
            placeholder="Email"
            require
            />
          </div>
          <div class="form-group col-12">
            <input
              class="form-control"
              v-model="input.username"
              type="text"
              placeholder="Username"
              required
              autocomplete="username"
            />
          </div>
          <div class="form-group col-12">
            <input
              class="form-control"
              v-model="input.password"
              type="password"
              placeholder="Password"
              required
              autocomplete="password"
            />
          </div>
          <div class="form-group col-12">
            <input
              class="form-control"
              v-model="input.password_confirmation"
              type="password"
              placeholder="Confirm Password"
              required
              autocomplete="password"
            />
          </div>

          <div class="form-group">
            <base-button
              :classNames="`btn vnc-green-background off-white`"
              :buttonText="`LOG IN`"
              :buttonType="`submit`"
            ></base-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import apiRequestMixin from '@/mixins/request-mixin';

// components
import BaseButton from '@/components/atoms/BaseButton.vue';

export default {
  name: 'signup-view',
  mixins: [apiRequestMixin],
  components: {
    BaseButton,
  },
  data() {
    return {
      input: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        username: '',
      },
      signUpUrl: `${this.$api}/auth`,
    };
  },
  methods: {
    handleSignUp() {
      console.log(this.signUpUrl);
      console.log(this.$http);
      console.log(this.input);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
