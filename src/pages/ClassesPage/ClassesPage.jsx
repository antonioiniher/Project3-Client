import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import ClassesList from "../../components/ClassesList/ClassesList"
import classService from "../../services/Class.services"
import Loader from "../../components/Loader/Loader"

const ClassesPage = () => {

  const [classes, setClasses] = useState()

  useEffect(() => {
    loadClasses()
  }, [])

  const loadClasses = () => {

    classService
      .getClasses()
      .then(({ data }) => {
        setClasses(data)
      })
      .catch(error => console.log(error))
  }

  console.log(classes)

  return (
    classes
      ?
      <div className="classContainer">
        <Container>
          <h1>Listado de clases</h1>
          <ClassesList classes={classes} />
        </Container>
      </div>
      :
      <Loader />
  )
}

export default ClassesPage