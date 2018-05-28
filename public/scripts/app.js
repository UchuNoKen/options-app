console.log('App.js is running');

// JSX - JavaScript XML

// will not render without babel
//var template = <p>This is JSX from app.js</p>;  
var template2 = React.createElement(
    "h1",
    {id: "app"},
    "Create new element without transpiling"
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);