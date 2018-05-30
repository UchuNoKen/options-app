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

let count = 0;
const addOne = () =>{
  console.log('addOne');
}
const someID = 'myidhere'
const template2 = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={() => {
      console.log('some value here');
    }}>+1</button>
  </div>
);

console.log(template2);
const appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);