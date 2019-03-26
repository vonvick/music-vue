export default {
  data() {
    return {
      errorMessage: '',
      loading: false,
    };
  },
  methods: {
    createRequest(url) {
      const userAuthPayload = this.getAuthorizationPayload();

      return this.$http.create({
        baseURL: url,
        headers: {
          'Content-Type': 'application/json',
          'access-token': userAuthPayload.token,
          'token-type': 'Bearer',
          client: userAuthPayload.clientToken,
          expiry: userAuthPayload.expiry,
          uid: userAuthPayload.uid,
        },
      });
    },
    requestWithBody(payload) {
      const userAuthPayload = this.getAuthorizationPayload();

      return this.$http({
        method: payload.method,
        url: payload.url,
        data: payload.data,
        headers: {
          'Content-Type': 'application/json',
          'access-token': userAuthPayload.token,
          'token-type': 'Bearer',
          client: userAuthPayload.clientToken,
          expiry: userAuthPayload.expiry,
          uid: userAuthPayload.uid,
        },
      });
    },
    handleError(error) {
      if (!error.response) {
        this.errorMessage = 'A network error occurred. Please try again';
      } else if (error.response.data.errors) {
        this.errorMessage = error.response.data.errors.join(', ');
      } else {
        this.errorMessage = 'An error occurred while performing request. Try again';
      }
    },
    async handleAuthentication() {
      const validatedForm = await this.$validator.validateAll();

      if (validatedForm) {
        this.loading = true;
        try {
          const createdUser = await this.requestWithBody({
            method: 'POST',
            url: this.signUpUrl,
            data: this.input,
          });

          const response = createdUser.data.data;
          const responseHeaders = createdUser.headers;

          await this.$store.dispatch('user/updateUserDetailsData', {
            email: response.email,
            firstName: response.first_name,
            lastName: response.last_name,
            username: response.username,
            description: response.description,
            avatar: response.avatar,
            roleId: response.role_id,
            headline: response.headline,
            accessToken: responseHeaders['access-token'],
            clientToken: responseHeaders.client,
            expiry: responseHeaders.expiry,
          });
          this.loading = false;

          this.$router.push('/');
        } catch (error) {
          this.loading = false;
          this.handleError(error);
        }
      } else {
        this.errorMessage = 'Fill out form appropriately to submit it.';
      }
    },
    getAuthorizationPayload() {
      const userPayload = this.$store.getters['user/getAllUserData'];

      return {
        token: userPayload.accessToken,
        clientToken: userPayload.clientToken,
        expiry: userPayload.expiry,
        uid: userPayload.email,
      };
    },
    deleteRequest(url) {
      const userAuthPayload = this.getAuthorizationPayload();

      this.$http.delete(url, {
        headers: {
          'Content-Type': 'application/json',
          'access-token': userAuthPayload.token,
          'token-type': 'Bearer',
          client: userAuthPayload.clientToken,
          expiry: userAuthPayload.expiry,
          uid: userAuthPayload.uid,
        },
      });
    },
  },
};
