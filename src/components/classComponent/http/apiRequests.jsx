import React, { Component } from 'react'

 class Api extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data :[]

    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>{
       return res.json()
    }).then((data)=>{
      // console.log(data)
      this.setState({data})
    })
  }


  render() {
    const{data}= this.state

    const styles = {
      backgroundColor:"orange",
      padding: "30px 32px",
      margin: "10px",
      borderRadius:"5px"
    }
    return (
      <div>
              <h1>http requests</h1>
              {
                    data.map((info)=>(
                      <div key={info.id} style={styles}>
                        <p>user id : {info.userId}</p>
                      <h3>{info.title}</h3>
                      </div>
                    ))
              }
      </div>
    )
  }
}

export default Api;
