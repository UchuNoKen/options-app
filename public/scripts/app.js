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

// var user = {
//     name: Pistol Pete,
//     age: 38,
//     location: Tombstone, AZ
// };

var userName = 'Bugs Bunny';
var userAge = 21;
var userLocation = 'Rio de Janeiro';

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    userName.toUpperCase()
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    userAge
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    userLocation
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
