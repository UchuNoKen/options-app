console.log('App.js is running');

// JSX - JavaScript XML

// will not render without babel
var template = <p>Is this being watched?</p>;  
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);