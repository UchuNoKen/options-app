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
};

var user = {
    name: 'Pistol Pete',
    age: 38,
    location: 'Tombstone, AZ'
};

function getLocation(location){
  if(location){
    return <p>Location: {location}</p>;
  }
}

let template2 = (
    <div>
      <h1>{user.name ? user.name : 'Anonymous'}</h1>
      <p>Age: {user.age}</p>
      {getLocation(user.location)}
    </div>
);

let template3 = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>
    </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);