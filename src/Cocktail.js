import React from 'react'
import { Link } from 'react-router-dom'

 function Cocktail({ image, name, id, glass }) {
  return (
    <article className='cocktail'>
      <div className='img-container'>
      <Link to={`/cocktail/${id}`}>
          <img src={image} alt={name} />
        </Link>
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
      </div>
    </article>
  )
}
export default Cocktail;