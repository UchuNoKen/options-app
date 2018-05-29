"use strict";

console.log('App.js is running');

// JSX - JavaScript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indecision App"
  ),
  React.createElement(
    "p",
    null,
    "This is some info"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

var app = {
  title: "Black Panther",
  subtitle: "Wakanda Forever"
};

var user = {
  name: 'Pistol Pete',
  age: 38
  // location: 'Tombstone, AZ'
};

function getLocation(location) {
  if (location) {
    return location;
  } else {
    return 'No idea';
  }
}

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    getLocation(user.location)
  )
);

var template3 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
