import React from 'react'
import { Link } from 'react-router-dom'

 function Cocktail({ image, name, id, glass,auth }) {
  return (
    <article className='cocktail'>
      <div className='img-container'>
      <Link to={auth ? `/cocktail/${id}` : `/signin`}>
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