// import renderer from 'react-test-renderer';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// export default it('renders without crashing', () => {
//   const rendered = renderer.create(<App />).toJSON();
//   expect(rendered).toBeTruthy();
// });

export function ashdas () {
  it('renders without crashing', () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
  });
}