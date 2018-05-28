console.log('App.js is running');

// JSX - JavaScript XML

// will not render without babel
var template = <h1>Indecision App</h1>;  
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);