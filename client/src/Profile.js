import React, { Component } from 'react';



class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: '',
      toDos: ['Mow the lawn', 'Get groceries', 'Wash the dog', 'Do Homework', 'Laundry'],
      newItem: ''
    }
  }
  clear = () => {
    this.setState({ toDos: [] });
  }
  deleteItem = (item) => {
    let toDosLocal = this.state.toDos;
    let itemIndex = toDosLocal.indexOf(item);

    if(itemIndex >= 0){
      toDosLocal.splice(itemIndex, 1);
      this.setState({ toDos: toDosLocal });
    }
  }
  add = (e) => {
    e.preventDefault();
    if(this.state.newItem){
      // newItem is a non-empty string
      let toDosLocal = this.state.toDos;
      toDosLocal.push(this.state.newItem);
      this.setState({error: '', newItem: '', toDos: toDosLocal });
    }
    else {
      //new item is empty, don't add it
      this.setState({error: 'please type something in thy box'});
    }
  }
  newItemChange = (e) => {
    this.setState({ newItem: e.target.value, error: ''});
  }
  render() {
  
    // jsx code want to use when calling variable
    return (
      <div className="container">
        <header className="header-background">
          <h1 className="header-title">Happy To-Do List</h1>
        </header>
            {/*Todo list goes here*/}
        <ToDoList items={this.state.toDos} onDelete={this.deleteItem} />
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
    );
  }
}

class ToDoList extends Component {
  render(){
    const toDosItems = this.props.items.map(thing => {
      return (<ListItem item={thing} key={thing} onDelete={this.props.onDelete} />);
    });
    return (
        <ul className="list-group">{toDosItems}</ul>
    );
  }
}

class ListItem extends Component {
  deleteHandler = () => {
    this.props.onDelete(this.props.item);
  }
  render(){
    return(
      <li className="list-group-item">
        {this.props.item}
        <button className="btn-xs btn-danger pull-right" onClick={this.deleteHandler}>X</button>
      </li>
    );
  }
}


export default Profile;