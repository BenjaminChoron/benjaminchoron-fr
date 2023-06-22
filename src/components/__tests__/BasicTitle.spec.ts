import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BasicTitle from "../basic/BasicTitle.vue";

describe('BasicTitle', () => {
  it('renders properly', () => {
    const wrapper = mount(BasicTitle, { props: { msg: 'Test Title' } })
    expect(wrapper.text()).toContain('Test Title')
  })
})
