<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button class="btn btn-default" @click="logout">LOG OUT</button>
  </div>
</template>

<script>
// Mixins
import requestMixin from '@/mixins/request-mixin';
export default {
  name: 'home-page-view',
  mixins: [requestMixin],
  components: {},
  data() {
    return {
      logoutUrl: `${this.$api}/auth/sign_out`,
    }
  },
  methods: {
    async logout() {
      await this.deleteRequest(this.logoutUrl);

      await this.$store.dispatch('user/clearUserDetailsData',[
        'email',
        'firstName',
        'lastName',
        'username',
        'description',
        'avatar',
        'roleId',
        'headline',
        'accessToken',
        'clientToken',
        'expiry'
      ]);

      this.$router.push('/login');
    },
  },
};
</script>
<style lang="scss" scoped></style>
