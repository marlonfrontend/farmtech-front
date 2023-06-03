import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import AppStatistic from '../AppStatistic.vue'

describe('AppStatistic.vue', () => {
  it('should render component props', () => {
    const props = {
      title: 'Stats Title',
      value: 10
    }
    const wrapper = mount(AppStatistic, {
      propsData: { ...props }
    })
    expect(wrapper.props()).toContain(props)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
