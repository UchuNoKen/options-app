class IndecisionApp extends React.Component{
  render(){

    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of an app'
    const options = ['thing one', 'thing two', 'thing four'];

    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component{
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component{
  handlePick(){
    alert('handlePick');
  }
  render(){
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component{
  removeAll(){
    alert('Removed');
  }
  render(){
    return (
      <div>
        <button onClick={this.removeAll}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>) 
        }
      </div>
    );
  }
}

class Option extends React.Component{
  render(){
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

class AddOption extends React.Component{
  render(){
    return(
      <div>
        AddOption component here
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));