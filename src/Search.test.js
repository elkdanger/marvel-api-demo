import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import { SearchComponent } from './Search'

it('checks the component against a snapshot', () => {
  const renderer = create(<SearchComponent />)

  const tree = renderer.toJSON()

  expect(tree).toMatchSnapshot()
})

it('can render the component with the correct initial state', () => {
  const component = shallow(<SearchComponent />)

  expect(component.state().isDirty).toBe(false)
  expect(component.state().isValid).toBe(false)
  expect(component.state().searchTerm).toBe('')
})

it('changes input state when characters are entered', () => {
  const component = shallow(<SearchComponent />)

  component
    .find('input')
    .simulate('change', { currentTarget: { value: 'Character name' } })

  expect(component.state().searchTerm).toEqual('Character name')
  expect(component.state().isDirty).toBe(true)
  expect(component.state().isValid).toBe(true)
})

it('becomes invalid when the search term is entered and then removed', () => {
  const component = shallow(<SearchComponent />)

  component
    .find('input')
    .simulate('change', { currentTarget: { value: 'A name' } })
    .simulate('change', { currentTarget: { value: '' } })

  expect(component.state().isValid).toBe(false)
  expect(component.state().isDirty).toBe(true)
})
