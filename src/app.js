console.log('App.js is running');

// JSX - JavaScript XML
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var userName = 'Bugs Bunny';
var userAge = 21;
var userLocation = 'Rio de Janeiro';

let template2 = (
    <div>
      <h1>{userName.toUpperCase()}</h1>
      <p>Age: {userAge}</p>
      <p>Location: {userLocation}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);