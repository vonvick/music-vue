import { shallowMount, createLocalVue } from '@vue/test-utils';
import sinon from 'sinon';

import InputFieldAtom from '@/components/atoms/InputFieldAtom.vue';

const localVue = createLocalVue();

describe('InputFieldAtom.vue', () => {
  const clickMethodStub = sinon.stub();

  const wrapper = shallowMount(InputFieldAtom, {
    localVue,
    slots: {
      default: '<span class="help is-danger-text">Error found here</span>',
    },
    propsData: {
      fieldType: 'email',
      name: 'email',
      id: 'email',
      value: null,
      error: false,
    },
    sync: false,
  });

  wrapper.setMethods({ updateValue: clickMethodStub });

  it('renders slot when passed in', () => {
    expect(wrapper.contains('span')).toBe(true);
  });

  it('updates the value when user input is called', () => {
    wrapper.find('input').trigger('input');
    expect(clickMethodStub.called).toBe(true);
  });

  it('has passed in attributes', () => {
    expect(wrapper.find('input').attributes('type')).toBe('email');
    expect(wrapper.find('input').attributes('id')).toBe('email');
    expect(wrapper.find('input').attributes('name')).toBe('email');
  });
});
