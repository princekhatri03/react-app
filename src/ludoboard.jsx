import {useState} from "react";
export default function LudoBoard(){
    let [moves,setMoves]= useState({blue:0,yellow:0,red:0,green:0})
    let incBlue= ()=>{
        setMoves((prevMoves)=>{
            return   {...prevMoves,blue:prevMoves.blue+1};
        })
    }
    let incYellow= ()=>{
        setMoves((prevMoves)=>{
            return   {...prevMoves,yellow:prevMoves.yellow+1};
        })
    }
    // array k liye hmme same spreading karni padegi + new value jo update krvani h vo bhejni padegi 
    return(
        <>
        <p>Game Begins!</p>
        <p>
         blue moves = {moves.blue}
        </p>
        <button onClick={incBlue} style={{backgroungdColor:"blue"}} >+1</button>
        <p>
         yellow moves ={moves.yellow}
        </p>
        <button onClick={incYellow} style={{backgroungdColor:"yellow"}} >+1</button>
        <p>
         red moves
        </p>
        <button style={{backgroungdColor:"red"}} >+1</button>
        <p>
         green moves
        </p>
        <button style={{backgroungdColor:"green"}} >+1</button>
        </>
        
    )
}