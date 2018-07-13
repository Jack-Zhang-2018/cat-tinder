import React from 'react'
import ReactDOM from 'react-dom'
import Cats from '../pages/Cats'
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

const cats = [
  {
    id: 1,
    name: 'Morris',
    age: 2,
    enjoys: "Long walks on the beach."
  },
  {
    id: 2,
    name: 'Paws',
    age: 4,
    enjoys: "Snuggling by the fire."
  },
  {
    id: 3,
    name: 'Mr. Meowsalot',
    age: 12,
    enjoys: "Being in charge."
  }
]

Enzyme.configure({ adapter: new Adapter() });

it('Cats renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cats cats={cats} />, div);
});

it('Renders the cats', ()=>{
  const component = mount(<Cats cats={cats} />)
  const headings = component.find('h1 > .cat-name')
  expect(headings.length).toBe(3)
});
it('displays just the cats age', ()=>{
    const component = mount(<Cats cats={cats} />)
    const headings = component.find('.cat-enjoys')
    expect(headings.length).toBeFalsy()
})
