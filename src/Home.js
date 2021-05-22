import React from 'react'
import CocktailList from './CocktailList'
import SearchForm from './SearchForm'

function Home({auth}) {
  return ( 
    <main>
      {auth ? <SearchForm /> : ''}
      <CocktailList auth={auth}/>
    </main>
  )
}

export default Home;
