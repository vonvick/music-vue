export default {
  data() {

  },
  methods: {
    createRequest(url) {
      return this.$http.create({
        baseURL: url,
        headers: {
          'Content-type': 'application/json',
        },
      });
    },
  },
};
