import React, { useState } from 'react';

const ApiPokemon = () =>{

    const [pokemones, setPokemones] = useState([]);

    const buscarPokemones = () => {
        
        setPokemones([]);

        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => response.json())
            .then(response => setPokemones(response.results))
    }

    return (
        <>
            <button onClick={buscarPokemones}>Fetch Pokemon</button>
            <ul>
            {
                pokemones?.map((pokemon, index)=>(
                   
                    <h1 key={index}>{pokemon.name}</h1>
                    
                ))
            }
            </ul>
        </>
    );
}

export default ApiPokemon;