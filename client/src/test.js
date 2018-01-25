import React, { Component } from 'react';
// import {Tooltip, OverlayTrigger} from 'react-bootstrap';
// import './App.css';

var placeholder = document.createElement("li");
placeholder.className = "placeholder";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...props};
  }
  dragStart(e) {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.dragged);
  }
  dragEnd(e) {
    this.dragged.style.display = 'block';
    this.dragged.parentNode.removeChild(placeholder);

    // update state
    var data = this.state.toDos;
    var from = Number(this.dragged.dataset.id);
    var to = Number(this.over.dataset.id);
    if(from < to) to--;
    data.splice(to, 0, data.splice(from, 1)[0]);
    this.setState({toDos: data});
  }
  dragOver(e) {
    console.log(e);
    e.preventDefault();
    this.dragged.style.display = "none";
    if(e.target.className === 'placeholder') return;
    this.over = e.target;
    e.target.parentNode.insertBefore(placeholder, e.target);
  }
  delete(item){
    const newState = this.state.toDos.slice();
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 1);
      this.setState({toDos: newState})
    }
  }
  render() {
    var listItems = this.state.toDos.map((item, i) => {
      return (
        <li
          data-id={i}
          key={i}
          draggable='true'
          onDragEnd={this.dragEnd.bind(this)}
          onDragStart={this.dragStart.bind(this)}>{item}
          <button className="btn-xs btn-danger pull-right" onClick={this.delete.bind(this, item)}>Delete</button>
          </li>
      )
     });
    return (
      <ul onDragOver={this.dragOver.bind(this)}>
        {listItems}
      </ul>
    )
  }
}

class Listy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      toDos: ['one', 'two', 'Blue', 'four', 'nine', 'yes', 'Orange'],
      newItem: ''
    }
  }
  clear = () => {
    this.setState({ toDos: [] });
  }
  add = (e) => {
    e.preventDefault();
    console.log('Add Function ROutek');
    if(this.state.newItem){
      // newItem is a non-empty string
      console.log(this.state.newItem);
      console.log(this.state.toDos);
      let toDosLocal = this.state.toDos;
      toDosLocal.push(this.state.newItem);
      this.setState({error: '', newItem: '', toDos: toDosLocal });
    } else {
      //new item is empty, don't add it
      this.setState({error: 'please type something in thy box'});
    }
  }
  newItemChange = (e) => {
    this.setState({ newItem: e.target.value, error: ''});
  }
  render() {
    return (
      <div>
        <header className="header-background">
          <h1 className="header-title">To-Do List</h1>
        </header>
            {/*Todo list goes here*/}
        <div className="toDo-list">
          <List toDos={this.state.toDos} />
        </div>
               {/*eror messages goes here*/}
          <p className="text-danger">{this.state.error}</p>
                 {/*form to add a new item*/}
          <form onSubmit={this.add}>
            <input type="text" className="form-control" placeholder="What are you doing?" onChange={this.newItemChange} value={this.state.newItem}/>
          </form>
                  {/*Button to clear the list*/}
          <div className="text-left">
            <button className="btn btn-primary" onClick={this.add}>add</button>
            <button className="btn btn-warning" onClick={this.clear}>clear</button>
          </div>
      </div>
    )
  }
}

export default Listy;
