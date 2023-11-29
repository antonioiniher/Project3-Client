import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import ClassesList from "../../components/ClassesList/ClassesList"
import classService from "../../services/Class.services"
import Loader from "../../components/Loader/Loader"
import { useSearchParams } from "react-router-dom"

const ClassesPage = () => {

  const [classes, setClasses] = useState()

  const [searchParams, setSearchParams] = useSearchParams();

  const languageQuery = (searchParams.get("language"))
  const cityQuery = (searchParams.get("city"))
  const classType = (searchParams.get("classType"))

  useEffect(() => {
    // loadClasses()
    loadLanguage()
  }, [])

  // const loadClasses = () => {

  //   classService
  //     .getClasses()
  //     .then(({ data }) => {
  //       setClasses(data)
  //     })
  //     .catch(error => console.log(error))
  // }

  const loadLanguage = () => {

    classService
      .getClassbySearch(languageQuery)
      .then(({ data }) => {
        setSearchParams(data)
      })
      .catch(error => console.log(error))
  }

  return (
    classes
      ?
      <div className="classContainer">
        <Container>
          <h1>Listado de clases</h1>
          <ClassesList searchParams={searchParams} />
        </Container>
      </div>
      :
      <Loader />
  )
}

export default ClassesPage