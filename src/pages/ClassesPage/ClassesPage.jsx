import { useEffect, useState } from "react"
import { Container, ButtonGroup, Form } from "react-bootstrap"
import ClassesList from "../../components/ClassesList/ClassesList"
import classService from "../../services/Class.services"
import Loader from "../../components/Loader/Loader"
import { useSearchParams } from "react-router-dom"

const ClassesPage = () => {

  const [classes, setClasses] = useState()

  const [searchParams, setSearchParams] = useSearchParams();

  let languageQuery = searchParams.get("language")
  let cityQuery = searchParams.get("city")
  let classType = searchParams.get("classType")

  useEffect(() => {
    loadClasses()
  }, [])

  const loadClasses = () => {

    classService
      .getClassbySearch(languageQuery, cityQuery)
      .then(({ data }) => {
        setClasses(data)
      })
      .catch(error => console.log(error))
  }

  const setTypeClass = e => {
    cityQuery = e.target.value
    loadClasses()
  }

  return (
    classes
      ?
      <div className="classContainer">
        <Container>
          <h1>Listado de clases</h1>
          <Form.Group className="mb-3 classText" controlId="classType">
            <Form.Label>Tipo de clase</Form.Label>
            <Form.Select aria-label="Default select example" onChange={setTypeClass} name="classType" className="selectType">
              <option className="selectionText">Selecciona una opción</option>
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