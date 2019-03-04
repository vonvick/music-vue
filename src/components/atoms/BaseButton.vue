<template>
  <button
    class="btn"
    :class="classNames"
    :type="buttonType"
    @click="$emit('clicked')"
    :disabled="disabled"
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
    disabled: {
      type: Boolean,
    },
  },
};
</script>
