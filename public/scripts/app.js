'use strict';

console.log('App.js is running');

// JSX - JavaScript XML

// will not render without babel
var template = React.createElement(
  'p',
  null,
  'Is this being watched?'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
