
import { Form, Row } from "react-bootstrap"
import { useState } from "react";




const SearchBar = ({ setResults }) => {

  const [query, setQuery] = useState('');

  const items = ['JavaScript', 'Ruby', 'C++', 'Java', 'Python']

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
      <Row>
        <Form.Group className="mb-3 searchBar" controlId="searcher" style={{ marginLeft: "50px", padding: "30px" }}>
          <Form.Control type="text" placeholder="Busca una clase" value={query} onChange={handleSearch} />
        </Form.Group>
      </Row>
    </Form >
  )

}


export default SearchBar