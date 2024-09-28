import axios from 'axios'
import React, { Component } from 'react'

 class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
          body:"",
          userId:"",
          title:""
    }
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }



  handleSubmit =(e)=>{
    e.preventDefault()
    // console.log(this.state)
      axios.post('https://jsonplaceholder.typicode.com/posts',this.state )
      .then((res)=>{
          console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
      this.setState({
        userId: "",
        title:"",
        body:""
      })
 }

  render() {
    const{title, userId, body}  =  this.state
    return (
      <div>
        <h1>post request</h1>

        <form action="" method="" encType="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={this.handleChange}
            placeholder="userid"
          />
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="body"
            value={body}
            onChange={this.handleChange}
          />

          <button type="submit">submit</button>
          <button type="reset">reset</button>
        </form>
      </div>
    );
  }
}

export default PostForm
