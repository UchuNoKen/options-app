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

var user = {
    name: 'Pistol Pete',
    age: 18,
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
      {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
      {getLocation(user.location)}
    </div>
);

var app = {
  title: 'Indecision App',
  subtitle: "Put your life in the hands of technology",
  options: ['One', 'Two']
};

let template3 = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options available'}</p>
    </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(template3, appRoot);