
import { Form, Row } from "react-bootstrap"
import { useState } from "react";




const SearchBar = ({ setResults }) => {

  const [query, setQuery] = useState('');

  const items = ['JavaScript', 'Ruby', 'C++', 'Java', 'Python', 'PHP']

  const handleSearch = (e) => {
    setQuery(e.target.value);
    getFilteredItems(e.target.value)
  };

  const getFilteredItems = (value) => {
    if (!value) setResults([])
    else setResults(items.filter(e => e.toLowerCase().startsWith(value.toLowerCase())))
  }

  return (
    <Form>
      <Form.Group className="searchBar" controlId="searcher">
        <Form.Control className="searchForm" type="text" placeholder="Busca una clase" value={query} onChange={handleSearch} />
      </Form.Group>
    </Form>
  )

}


export default SearchBar