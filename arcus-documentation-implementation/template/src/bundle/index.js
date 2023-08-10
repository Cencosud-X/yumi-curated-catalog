import { jsx } from 'react/jsx-runtime';
import React from 'react';

function Application() {
  return jsx("div", {
    children: "Hello"
  });
}

class Root extends React.Component {
  render() {
    return jsx(Application, {});
  }
}

export { Root as default };
