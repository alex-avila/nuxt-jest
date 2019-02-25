import { shallowMount } from '@vue/test-utils'
import AddNote from '@/components/AddNote.vue'
import BaseButton from '@/components/BaseButton.vue'

describe('AddNote', () => {
  const wrapper = shallowMount(AddNote, {
    propsData: {
      note: ''
    }
  })
  const editableDiv = wrapper.find('[contenteditable="true"]')
  const button = wrapper.find(BaseButton)

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  test('has default placeholer', () => {
    expect(editableDiv.element.innerHTML.trim()).toBe(
      wrapper.vm.$data.placeholder
    )
  })

  test('button is initially disabled', () => {
    expect(button.attributes('disabled')).toBeTruthy()
  })
})
