'use strict';

console.log('App.js is running');

// JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Ya boy!'
  ),
  React.createElement(
    'p',
    null,
    'Age: 31'
  ),
  React.createElement(
    'p',
    null,
    'Location: Atlanta'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
