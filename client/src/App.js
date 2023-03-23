import React from "react"; 
import axios from "axios";
import { Component } from "react";


export default class App extends Component {
  constructor(props) {  
    super(props);
    this.state = {
      innovation: [],
    };  

  }  

  
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}