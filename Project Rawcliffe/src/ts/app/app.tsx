
import React = require('react');
import ReactDom = require('react-dom');

class App extends React.Component {
  render() {
    return (
        <div>
            <h1>Hello World!</h1>
            <div>Node version: {process.versions.node}</div>,
            Chromium
            UNKNOWN,
            and Electron
            UNKNOWN.
        </div>
    );
  }
}

ReactDom.render(
    <App />,
  document.getElementById('app')
);