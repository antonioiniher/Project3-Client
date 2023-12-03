import { useEffect, useState } from "react"
import { Container, ButtonGroup, Form } from "react-bootstrap"
import ClassesList from "../../components/ClassesList/ClassesList"
import classService from "../../services/Class.services"
import Loader from "../../components/Loader/Loader"
import { useNavigate, useSearchParams } from "react-router-dom"
import "./ClassesPage.css"
import SearchBar from "../../components/SearchBar/SearchBar"

const ClassesPage = () => {

  const [classes, setClasses] = useState()

  const [searchParams, setSearchParams] = useSearchParams()

  const navigate = useNavigate()

  let languageQuery = searchParams.get("language")
  let cityQuery = searchParams.get("city")
  let classType = searchParams.get("classType")

  useEffect(() => {
    loadClasses()
  }, [])

  const loadClasses = () => {

    classService
      .getClassbySearch(languageQuery, classType)
      .then(({ data }) => {
        setClasses(data)
      })
      .catch(error => console.log(error))

    const newSearchParams = new URLSearchParams()
    if (languageQuery) newSearchParams.set('language', languageQuery)
    if (cityQuery) newSearchParams.set('city', cityQuery)
    if (classType) newSearchParams.set('classType', classType)

    navigate(`?${newSearchParams.toString()}`)
  }

  const setTypeClass = e => {
    classType = e.target.value
    loadClasses()
  }

  // dar una vuelta, con jorge intente meter cityQuery

  return (
    classes
      ?
      <div className="classContainer">
        <Container>
          <h1 className="listClasses">Listado de clases</h1>
          <Form.Group className="mb-3 classText" controlId="classType">
            <Form.Label>Tipo de clase</Form.Label>
            <hr />
            {/* <SearchBar setResults={setResults} /> */}
            <Form.Select aria-label="Default select example" onChange={setTypeClass} name="classType" className="selectType">
              <option className="selectionText" value="">Selecciona una opción</option>
              <option value="On-site" className="options">Presencial</option>
              <option value="Hybrid" className="options">Híbrida</option>
              <option value="Remote" className="options">En remoto</option>
            </Form.Select>
          </Form.Group>
          <ClassesList classes={classes} />
        </Container>
      </div>
      :
      <Loader />
  )
}

export default ClassesPage