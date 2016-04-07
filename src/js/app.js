import example from './example';
import { _, React, ReactDOM } from './dependencies.js';

export class App extends React.Component {
  render() {
    let component,
      insertElement;

    component = <p id="greeting">Hello World</p>;
    insertElement = document.getElementById('app');
    example(insertElement);
    console.log('hello world example is done sofar!');

    return component;
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
