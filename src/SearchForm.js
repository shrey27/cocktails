import {React,useContext,useRef,useEffect} from 'react';
import { AppContext } from './context'

function SearchForm() {
  const { setSearchTerm } = useContext(AppContext);
  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  function searchCocktail() {
    setSearchTerm(searchValue.current.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <h3>Search For a cocktail</h3>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section> 
  )
}
export default SearchForm;