console.log('App.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'Your life, in the hands of technology',
  options: []
};

// JSX - JavaScript XML

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

    if(option){
      app.options.push(option);
      e.target.elements.option.value = '';
      // console.log('Form submitted');
      render();
    }
};

const onRemoveAll = () => {
  // console.log(app.options);
  app.options = [];
  render();
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      {
        [99, 98, 97] // equivalent to {99}{98}{97}
      }
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  
  ReactDOM.render(template, appRoot);
};

render();