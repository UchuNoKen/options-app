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

var count = 0;

var addOne = function addOne() {
  count++;
  renderCounterApp();
  console.log('addOne', count);
};

var minusOne = function minusOne() {
  count--;
  console.log('minusOne');
  renderCounterApp();
};

var reset = function reset() {
  count = 0;
  console.log('reset');
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var template2 = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'reset'
    )
  );

  ReactDOM.render(template2, appRoot);
};

renderCounterApp();
