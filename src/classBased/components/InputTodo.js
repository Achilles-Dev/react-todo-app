import React, { Component } from 'react';
/* eslint-disable */

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { addTodoProps } = this.props;
    if (title.trim()) {
      addTodoProps(title);
      this.setState({
        title: '',
      });
    }
  };

  render() {
    const { title } = this.state;
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          name="title"
          value={title}
          onChange={this.onChange}
        />
        <button type="button" className="input-submit">Submit</button>
      </form>
    );
  }
}
export default InputTodo;
