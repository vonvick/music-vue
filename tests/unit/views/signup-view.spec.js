/* eslint-disable no-restricted-globals */
import { createLocalVue, RouterLinkStub, mount } from '@vue/test-utils';
import sinon from 'sinon';
import flushPromises from 'flush-promises';
import VeeValidate from 'vee-validate';

import SignUpView from '@/views/SignUpView.vue';
import BaseButton from '@/components/atoms/BaseButton.vue';

const localVue = createLocalVue();
localVue.use(VeeValidate);
jest.mock('axios');

describe('SignUpView.vue', () => {
  let wrapper;
  let clickMethodStub;

  beforeAll(() => {
    clickMethodStub = sinon.stub();
    wrapper = mount(SignUpView, {
      localVue,
      stubs: {
        'base-button': BaseButton,
        RouterLink: RouterLinkStub,
      },
      sync: false,
    });

    wrapper.setMethods({ handleAuthentication: clickMethodStub });
  });

  describe('Form Layout', () => {
    it('renders renders signup form with Button', () => {
      expect(wrapper.findAll('button').length).toEqual(1);
    });

    it('renders renders signup form with all input fields', () => {
      expect(wrapper.findAll('input').length).toEqual(6);
    });

    it('renders signup form with link to signin form', () => {
      expect(wrapper.find(RouterLinkStub).props().to).toBe('/login');
    });
  });

  describe('Filling Form', () => {
    beforeAll(() => {
      wrapper.find('#firstName').setValue('Victor');
      wrapper.find('#lastName').setValue('John');
      wrapper.find('#email').setValue('aa@bb.com');
      wrapper.find('#username').setValue('vonvick');
      wrapper.find('#password').setValue('angel123');
      wrapper.find('#passwordConfirm').setValue('angel123');
    });

    it('form submit button disabled attribute to be undefined', () => {
      expect(wrapper.find('button').attributes('disabled')).toBeUndefined();
    });

    describe('Submitting', () => {
      it('submits form when button is clicked', async () => {
        wrapper.find('form').trigger('submit');
        await flushPromises();
        expect(clickMethodStub.called).toBe(true);
        expect(wrapper.vm.loading).toBe(false);
      });
    });
  });
});
