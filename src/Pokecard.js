import React from 'react'
import './Pokecard.css'

const pokeAPI =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const Pokecard = (props) => {
  const imgSrc = `${pokeAPI}${props.id}.png`

  return (
    <div className="Pokecard">
      <h4 className="Pokecard-title">{props.name}</h4>
      <img className="Pokecard-img" src={imgSrc} alt="pokemon"></img>
      <p className="Pokecard-data">Type: {props.type}</p>
      <p className="Pokecard-data">EXP: {props.base_experience}</p>
    </div>
  )
}

export default Pokecard
