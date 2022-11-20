import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const url="https://pokeapi.co/api/v2/pokemon?limit=800";

function App() {

  const [ names , setNames ] = useState([]);

  async function getDataFromApi(){
      const api = await axios.get(url);
      const data = api.data.results;
      setNames(data.map((elem)=>{
        return elem.name;
      }));
  }

  useEffect(()=>{
      getDataFromApi();
  },[]);
  
  async function getImage(event){
    const x = parseInt(event.target.id);
    const imgurl = `https://pokeapi.co/api/v2/pokemon/${x+1}`;
    const api = await axios.get(imgurl);
    const data = api.data.sprites.front_default;
    window.open(data);
  }

  return (
    <>
      <h1>Pokedex</h1>
      <ol>
      {names.map((val,idx)=>{
        return <li key={idx} id={idx} onClick={getImage}>{val}</li>
      })}
      </ol>
    </>
  );
}

export default App;
