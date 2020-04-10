import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('heading is visible', () => {

  async () =>{
    const {getByText} = render(<App/>)

    const headingText = getByText(`Women's World Cup Players, Ranked`);
    expect(headingText).toBeInTheDocument();
  }
})