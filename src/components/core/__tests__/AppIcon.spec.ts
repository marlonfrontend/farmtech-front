import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import AppIcon from '../AppIcon.vue'

describe('AppIcon.vue', () => {
  it('should render component props', () => {
    const props = {
      icon: 'search'
    }
    const wrapper = mount(AppIcon, {
      propsData: { ...props }
    })
    expect(wrapper.props()).toContain(props)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
