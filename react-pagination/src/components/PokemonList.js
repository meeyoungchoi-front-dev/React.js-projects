import React from 'react'
import PokemonItem from './PokemonItem';

const PokemonList = ({pokimonData}) => {
  return (
    <PokemonItem pokimonData={pokimonData}/>
  )
}
export default PokemonList;