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

const addOne = () => {
  count++;
  renderCounterApp();
  console.log('addOne', count);
};

const minusOne = () => {
  count--;
  console.log('minusOne');
  renderCounterApp();
};

const reset = () => {
  count = 0;
  console.log('reset');
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const template2 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(template2, appRoot);
};

renderCounterApp();