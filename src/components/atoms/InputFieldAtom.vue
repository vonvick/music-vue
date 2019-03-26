<template>
  <div>
    <label v-if="label" for="id">{{ label }}</label>
    <input
      class="form-control"
      :type="fieldType"
      :value="value"
      :placeholder="placeholder"
      :name="name"
      :id="id"
      @input="updateValue($event)"
      @change="updateValue($event)"
      @blur="$emit('blur')"
      @focus="$emit('focus')"
      :class="{'is-danger': error}"
    />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'input-field-atom',
  props: {
    fieldType: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    name: {
      type: String,
    },
    id: {
      type: String,
    },
    error: {
      type: Boolean
    },
    label: {
      type: String
    },
    value: String,
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value);
    }
  }
}
</script>
