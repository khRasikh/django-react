import React, { Component } from "react";
import TodosApiService from "../../src/TodosApiService";
import { Card, Badge } from "react-bootstrap";
import logo from './images/reactlogo.png';
import './styles/app.css';
import {Link} from 'react-router-dom'; 

const todosApiService = new TodosApiService(); 

class showList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    todosApiService
      .getTodos()
      .then(data => {
        this.setState({ todos: data });
      })
      .catch(err => console.log(err));
  }
  handleDelete(id) {
    todosApiService.deleteTodo(id).then(() => {
      var newTodos = this.state.todos.filter(todo => todo.id !== id);
      this.setState({ todos: newTodos });
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row" id="list_id">
              {
                this.state.todos.map(todo => (
                  <Card className="mycard" style={{ width: '15rem'}} bg="light" text="muted">
                  <Card.Header>{todo.title}</Card.Header>
                  <Card.Text>{todo.description}</Card.Text>
                    <Card.Img src={logo} name="image"/>
                  <small className="blockquote-footer">{todo.title}</small>
                  <Card.Footer>
                  <a href="/"><Badge variant="info">{todo.completed ? "Details" : "No Details"}</Badge>{' '}</a>
                  <a href="/"><Badge variant="primary">More Info</Badge></a>
                  </Card.Footer>
                </Card>
                ))
              }      
        </div>
        <Link to="/create/">Add New</Link>
        <table className="table">
          <thead key="thead">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Completed</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map(todo => (
              <tr key={todo.id}>
                <td>00{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.completed ? "Yes" : "No"}<Card.Img src="/mypircture.jpg" variant="top"/></td>
                <td>
                  <button onClick={() => this.handleDelete(todo.id)}>
                    Delete
                  </button>
                  <a href={`/todos/${todo.id}/`}>Update</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default showList;
