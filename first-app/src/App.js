
import React,{Component} from "react";
import Profile from "./Component/Profile";
export default class app extends Component {

  
    state={
      shows:false
    }
    
  
  handleClick=()=>{
    this.setState({shows:!this.state.shows})
    console.log(this.state.shows);

  }
  render(){

 
  return (
    <div className="App">
      {this.state.shows && <Profile/>}
       
        <button onClick={this.handleClick} >on click</button>

    </div>
  );
  }
}

