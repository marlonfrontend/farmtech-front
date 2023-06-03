import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import AppCard from '../AppCard.vue'

describe('AppCard.vue', () => {
  it('should render component props', () => {
    const props = {
      title: 'Card Title'
    }
    const wrapper = mount(AppCard, {
      propsData: { ...props }
    })
    expect(wrapper.props()).toContain(props)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
