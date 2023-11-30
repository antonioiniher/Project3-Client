import { useEffect, useState } from "react"
import { Container, ButtonGroup, } from "react-bootstrap"
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
    // loadClasses()
  }, [])

  // const loadClasses = () => {
  // 
  //   classService
  //     .getClasses()
  //     .then(({ data }) => {
  //       setClasses(data)
  //     })
  //     .catch(error => console.log(error))
  // }

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

  // if (languageQuery === null) loadClasses()
  // else loadLanguage()

  return (
    classes
      ?
      <div className="classContainer">
        <Container>
          <h1>Listado de clases</h1>
          <label style={{ color: 'white' }}>
            Tipo de clase
            <select className="typeClass" name="typeClass" onChange={setTypeClass}>
              <option value="On-site">Presencial</option>
              <option value="Hybrid">Semipresencial</option>
              <option value="Remote">Online</option>
            </select>
          </label>
          <ClassesList classes={classes} />
        </Container>
      </div>
      :
      <Loader />
  )
}

export default ClassesPage