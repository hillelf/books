import React from 'react'
import ReactDOM from 'react-dom'
export default (props) => {
    console.log(props);
   return (
    <div>Hello {props.name}! Did you know that Hillel is {props.age}? It's true.</div>
   )
}