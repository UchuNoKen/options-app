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

var app = {
    title: "Black Panther",
    subtitle: "Wakanda Forever"
}

var user = {
    name: 'Pistol Pete',
    age: 38,
    location: 'Tombstone, AZ'
};

let template2 = (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Location: {user.location}</p>
    </div>
);

let template3 = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>
    </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(template3, appRoot);