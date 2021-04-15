import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

class MyApp extends Component {
  state = {
    input: "",
    todo: [
      {
        id: 0,
        title: "text",
      },
    ],
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleChange(e) {
    this.setState({ input: e.target.value });
  }
  handleDelete = (e) => {
    return this.state.todo.filter(function (todo) {
      return todo !== todo.id;
    });
  };

  handleSubmit(e) {
    let keyId = this.state.todo.length;

    e.preventDefault();
    this.setState({
      input: "",
      todo: [
        ...this.state.todo,
        {
          id: keyId++,
          title: this.state.input,
        },
      ],
    });
  }

  render() {
    let renderCard = this.state.todo.map(function (e) {
      return (
        <div className="card">
          <h4 className="card-title">{e.title}</h4>
          <button
            onClick={this.handleDelete}
            className="btn btn-primary btn-sm"
          >
            Delete
          </button>
        </div>
      );
    });

    return (
      <div>
        <div className="container">
          <h1>To Do App</h1>

          <p>This is todo app application .</p>
        </div>
        <div className="container form-group">
          <input
            value={this.state.input}
            onChange={this.handleChange}
            className="form-control"
            type="text"
          />
          <button onClick={this.handleSubmit} className="btn btn-primary m-2">
            Submit
          </button>
          <br />
          <br />
          <div>{renderCard}</div>
        </div>
      </div>
    );
  }
}

export default MyApp;
