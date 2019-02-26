<template>
  <button
    class="btn"
    :class="classNames"
    :type="buttonType"
    @click="$emit('clicked')"
  >
    {{buttonText}}
  </button>
</template>

<script>
export default {
  props: {
    classNames: {
      type: String,
    },
    buttonType: {
      type: String,
      default: 'submit',
    },
    buttonText: {
      type: String,
    },
  },
};
</script>
