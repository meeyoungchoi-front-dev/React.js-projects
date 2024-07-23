import React from 'react'

const PokemonItem = ({pokimonData}) => {
  console.log("포켓몬: ",pokimonData);
  return (
    <>
       <h1>포켓몬 도감 - 포켓몬 이름과 이미지</h1>
       {pokimonData.map(data => 
       <div>
            <li>
            {data.name}
            </li>
            <img
                src={`https://img.pokemondb.net/artwork/${data.name}.jpg`}
                alt={data.name}
                width="10%"
                className={`object-contain h-full`}
            />
       </div>
    )}
    </>
 
    
  )
}
export default PokemonItem;