import { shallowMount } from '@vue/test-utils';
import BaseButton from '@/components/atoms/BaseButton.vue';

describe('BaseButton.vue', () => {
  const msg = 'Submit';
  const wrapper = shallowMount(BaseButton, {
    slots: {
      default: msg,
    },
    propsData: {
      disabled: true,
      classNames: 'btn vnc-green-background',
    },
  });

  it('renders props.msg when passed', () => {
    expect(wrapper.text()).toMatch(msg);
  });

  it('renders button as disabled when disabled evaluates to true', () => {
    expect(wrapper.attributes('disabled')).toBe('disabled');
  });

  it('has passed in class names', () => {
    expect(wrapper.classes()).toContain('vnc-green-background');
  });
});
