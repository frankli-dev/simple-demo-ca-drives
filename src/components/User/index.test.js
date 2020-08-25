import React from 'react'
import { shallow, mount, render } from 'enzyme'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import User from './index'

configure({ adapter: new Adapter() })

describe('User', () => {
  it('renders correctly', () => {
    shallow(<User />)
  })
  it('includes two spans and two buttons', () => {
    const wrapper = shallow(<User />)
    expect(wrapper.find('span').length).toEqual(2)
  })
  it('renders name and score correctly', () => {
    const wrapper = shallow(<User name="test" score={2} />)
    expect(wrapper.find('.user-name').text()).toEqual('test')
    expect(wrapper.find('.user-score').text()).toEqual('2 points')
  })

  it('trigger inc event when the plus button is clicked', () => {
    let triggered = false
    const handleInc = () => {
      triggered = true
    }
    const wrapper = shallow(<User inc={handleInc} />)
    wrapper.find('button[children="+"]').simulate('click')
    expect(triggered).toBe(true)
  })

  it('trigger dec event when the minus button is clicked', () => {
    let triggered = false
    const handleDec = () => {
      triggered = true
    }
    const wrapper = shallow(<User dec={handleDec} />)
    wrapper.find('button[children="-"]').simulate('click')
    expect(triggered).toBe(true)
  })
})
