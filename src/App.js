import React, {Component} from 'react';
import './App.css';
import ListItems from './ListItems.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";


import "./style.css";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      toDoItems: [],
      newItem: ""
    };
  }

  handleNewitemChange = event => {
    this.setState({newItem: event.target.value});
  };

  addNewItem = event  => {
    event.preventDefault();

    const newItem = this.state.newItem.trim();

    if(newItem !== ""){
      const newToDoItems = [...this.state.toDoItems, {text: newItem, done: false, timeStamp: Date.now()}];
      
      this.setState({toDoItems: newToDoItems, newItem:""});
    }
  };

  selectMultiple = timeStamp => {
    const newToDoItems = [...this.state.toDoItems].map(item => {
      if(item.timeStamp === timeStamp){
        item.done = !item.done;
      }
      return item;
    })

    this.setState({toDoItems: newToDoItems});
  }

  deleteItem = timeStamp => {
    const newToDoItems = [...this.state.toDoItems].filter(item => {
      return item.timeStamp !== timeStamp;
    });

    this.setState({toDoItems: newToDoItems});
    
  }

  deleteMultiple = () => {
    const newToDoItems = this.state.toDoItems.filter( item => {
      return !item.done; 
    });

    this.setState({toDoItems: newToDoItems});
  }
  

  render(){

    return(
      <div className="App">
        <header className="header">
          <h1 class="tittle">To-Do List</h1>
        </header>
        <form id="to-do-form" onSubmit={this.addNewItem}>
          <div className="addItemContainer">
            <div className="inputcontainer">
              <input 
              className="input"
              placeholder="Add a new to-do" 
              onChange={this.handleNewitemChange}
              value={this.state.newItem}
              />
            </div>
            <div>
              <button className="addButton">
              <FontAwesomeIcon icon={faPlusCircle} />
              </button>
            </div>
          </div>
        </form>
        <ListItems items={this.state.toDoItems} 
        selectMultiple={this.selectMultiple} 
        deleteItem={this.deleteItem}
        deleteMultiple={this.deleteMultiple}
        />
      </div>
    );
  }




}
