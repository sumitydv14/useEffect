import React, { useEffect, useState } from 'react'
import axios from "axios";  

function Pokmon() {

    const[num , setNum] = useState(0);
    const[name , setName] = useState();
    const[moves , setMoves] = useState();

    useEffect(() => {
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data.name);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }
        getData()
    })

    

    return (
        <>
   
       <h2>You Choose <span style={{color:'red'}}>{num}</span>.</h2>
       <h2>My Name is <span style={{color:'red'}}>{name}</span>.</h2>
       <h2>I have <span style={{color:'red'}}>{moves}</span> Moves.</h2>


            <select value={num} onChange={(e) =>{setNum(e.target.value);}} >
                <option value='1'>1</option>
                <option value='25'>25</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
        </>
    )
}

export default Pokmon
