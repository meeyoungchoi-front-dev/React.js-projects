import logo from './logo.svg';
import React, {useEffect, useState} from "react";
import axios from "axios";

import './App.css';
import PokemonList from "../src/components/PokemonList";

function App() {
  const [pokimonData, setPokimon] = useState([]);

  useEffect(() => {

    async function get() {
      
        const results = axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1302&offset=1`);
       
            const fetchData = await results;
            console.log(fetchData.data.results);
            setPokimon(fetchData.data.results);
        
        
        
      
    };
    get();
  }, []); 

  return (
    <PokemonList pokimonData={pokimonData}></PokemonList>
  );
}

export default App;
