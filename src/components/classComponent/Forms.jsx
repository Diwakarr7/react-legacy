import React, { Component } from 'react'

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      comments: '',
      topic: '',
    };
  }

  handleChange = (event) => {
    //  console.log(event)
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleReset = () => {
    this.setState({
      firstName: '',
      lastName: '',
      comments: '',
      topic: '',
    });
  };

  handleSubmit = (e)=>{
   e.preventDefault();

  }

  render() {

    const textStyle = {
        resize : "none"
    }
    const { firstName, lastName, comments, topic } = this.state;
    console.log(topic);
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <h1>
            firstname : {firstName}-- -- lastname : {lastName}
          </h1>
          <label>
            username
            <input
              type="text"
              name="firstName"
              onChange={this.handleChange}
              value={firstName}
            />
          </label>
          <label>
            lastname
            <input
              type="text"
              name="lastName"
              onChange={this.handleChange}
              value={lastName}
            />
          </label>

          <label>
            comments
            <textarea
              style={textStyle}
              name="comments"
              value={comments}
              onChange={this.handleChange}
            ></textarea>
          </label>
          {/*
        select */}
          <div>
            <label>
              topic
              <select name="topic" value={topic} onChange={this.handleChange}>
                <option value="" disabled>
                  numbers
                </option>
                <option value="1">option-1</option>
                <option value="2">option-2</option>
                <option value="3">option-3</option>
                <option value="4">option-4</option>
                <option value="5">option-5</option>
                <option value="6">option-6</option>
              </select>
            </label>
          </div>
          <button type="submit">submit</button>
          <br />
          <button type="reset" onClick={this.handleReset}>
            reset
          </button>
        </form>
      </div>
    );
  }
}

//
/*

*/

export default Forms
