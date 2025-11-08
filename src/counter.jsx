import {useState} from "react";
export default function Counter(){
   let  [count,setCount]= useState(0);
    function incCount(){
        setCount(count+1);
        console.log(count);
    }
    return (
      <div>
        <h3>
            Count ={count}
        </h3>
        <button onClick={incCount} >
           Increase count
        </button>
      </div>
    )
}
// Closure=> let you to use  outer fn variable during the separate call of inner function 
// procedure is to return function from outer fn and store it in a variable 
// in react we canot direct print boolean value ,first change to string with .toString()