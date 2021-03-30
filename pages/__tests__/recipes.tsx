// import { render, screen } from '@testing-library/react'
import Recipes from "../recipes"
import { mount, shallow, render } from 'enzyme';


describe('<Recipes/>', () => {
  it("should render heading", () => {
    const component = shallow(<Recipes />)
    expect(component).toMatchSnapshot()
  })
})
