console.log('App.js is running');

// JSX - JavaScript XML
const template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
); 

const user = {
    name: 'Pistol Pete',
    age: 18,
    location: 'Tombstone, AZ'
};

function getLocation(location){
  if(location){
    return <p>Location: {location}</p>;
  }
}

const template2 = (
    <div>
      <h1>{user.name ? user.name : 'Anonymous'}</h1>
      {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
      {getLocation(user.location)}
    </div>
);

const app = {
  title: 'Indecision App',
  subtitle: "Put your life in the hands of technology",
  options: ['One', 'Two']
};

const template3 = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options available'}</p>
    </div>
)

const appRoot = document.getElementById('app');

ReactDOM.render(template3, appRoot);