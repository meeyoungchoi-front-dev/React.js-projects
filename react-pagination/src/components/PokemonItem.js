import React from 'react'

const PokemonItem = ({pokimonData}) => {
  return (
    <>
       <h1>포켓몬 도감</h1>
       {pokimonData.map(data => 
       <div>
            <li>
            {data.name}
            </li>
            <img
                src={`https://img.pokemondb.net/artwork/${data.name}.jpg`}
                alt={data.name}
                width="100%"
                className={`object-contain h-full`}
            />
       </div>
    )}
    </>
 
    
  )
}
export default PokemonItem;