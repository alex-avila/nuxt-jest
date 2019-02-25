import { shallowMount } from '@vue/test-utils'
import BaseButton from '@/components/BaseButton.vue'

describe('BaseButton', () => {
  const buttonContent = 'Add Note'
  const wrapper = shallowMount(BaseButton, {
    slots: {
      default: buttonContent
    }
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  test('displays button content', () => {
    expect(wrapper.text()).toBe(buttonContent)
  })
})
