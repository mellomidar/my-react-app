import React from 'react';

class Dog extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: 'Milo',
      color: 'Black',
      habit: 'Barking',
      age: 2
    };
  }

  changeColor = () => {
    this.setState({color: 'Brown'});
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({habit: 'Running'});
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById('div1').innerHTML = 
    "Before update, the value of habit is " + prevState.habit;
  }

  componentDidUpdate() {
    document.getElementById('div2').innerHTML =
    "After update, the value of habit is " + this.state.habit;
  }

  render() {  
    return (
      <div>
        <h1>{this.state.name} is a {this.props.breed} which 
          has a {this.state.color} fur. He likes {this.state.habit} at 
          strangers. He is {this.state.age} years old.
        </h1>
        <button type='button' onClick={this.changeColor}>
          Change Color
        </button>
        <div id='div1'></div>
        <div id='div2'></div>
      </div>
    );
  } 
}

export default Dog;
