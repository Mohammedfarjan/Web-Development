import React, {useState} from 'react'
import style from "../CSS/Article.CSS"
import style from "../CSS/HomePage.CSS"

function Article(props) {
  const [count, setCount]=useState(0)


  const handleIncrement=()=>{
    setCount(count+1)
  }
  return (
    <div>
      <h1>Article</h1>
       <h3>{props.title}</h3> 
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eligendi fugiat pariatur eos quibusdam ratione possimus adipisci, impedit, autem ad quo, et cum laudantium deleniti. Soluta molestias amet quas labore.</p>
      <h2>{count}</h2>
      <button className={style.btn} onClick={handleIncrement}>Increment</button>
      <button className={style.btn} onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Article

// import React from 'react'
// import { add as addition } from '../utility'


// class Article extends React.Component {
//     constructor(props) {
//       super(props)
//       this.state={
//         count:0,
//         name:"Alex"
//       }
//     //   console.log(addition(2,3))
//     }

//     componentDidMount(){
//         console.log("componentDidMount")
//     }

//     shouldComponentUpdate(nextProps, nextState){
//       if(nextState.count===1)return false
//         console.log("shouldComponentUpdate")
//         return true
//     }


//     componentDidUpdate(){
//         console.log("componentDidUpdate")
//     }

//     componentWillUnmount(){
//         console.log("componentWillUnmount")
//     }

//     handleClick=()=>{
//         // this.state.count=this.state.count+1
//         // console.log(this.state.count)
//         this.setState({count: this.state.count+1})
//     }

//     handleDecrement=()=>{
//         this.setState({count: this.state.count-1})
//     }
//   render() {
//     return (
//       <div>
//         <h1>Article</h1>
//         <h3>{this.state.count}</h3>
//         <button onClick={this.handleClick}>Increment</button>
//         <button onClick={this.handleDecrement}>Decrement</button>
//         <h3>{this.props.title}</h3> 
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eligendi fugiat pariatur eos quibusdam ratione possimus adipisci, impedit, autem ad quo, et cum laudantium deleniti. Soluta molestias amet quas labore.</p>
//       </div>
//     )
//   }
// }

// export default  Article