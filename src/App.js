import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/Card';

const url="https://pokeapi.co/api/v2/pokemon?limit=1154";

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
  
  return (
    <>
      <h1 className="text-center p-3">Pokemon Wall</h1>
      {names.map((val,idx)=>{
        return <Card key={idx} id={idx} name={val}/>
      })}
    </>
  );
}

export default App;
