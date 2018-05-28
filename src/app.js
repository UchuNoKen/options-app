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

let template2 = (
    <div>
      <h1>Ya boy!</h1>
      <p>Age: 31</p>
      <p>Location: Atlanta</p>
    </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);