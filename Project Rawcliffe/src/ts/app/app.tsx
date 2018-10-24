// Dependances
import * as React from 'react';
import {Component} from 'react';
import ReactDom = require('react-dom');

// Customs Dependances
import Editor from './components/editor';

class App extends Component {
  render() {
    return (
        <div id="appFrame">
          <Editor />
        </div>
    );
  }
}

ReactDom.render(
    <App />,
  document.getElementById('app')
);