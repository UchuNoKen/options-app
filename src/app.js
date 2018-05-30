console.log('App.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'Your life, in the hands of technology',
  options: ['One', 'Two']
};

// JSX - JavaScript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
    <form>
      <input type="text" name="option" />
      <button>Add Option</button>
    </form>
  </div>
); 

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);