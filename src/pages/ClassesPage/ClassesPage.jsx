import { useEffect, useState } from "react"
import ClassesList from "../../components/ClassesList/ClassesList"
import { Container } from "react-bootstrap"

const ClassesPage = () => {

  // const [classes, setClasses] = useState

  // useEffect(() => {
  //   loadClasses()
  // }, [])

  // const loadClasses = () => {
  //   classesService
  //   .getClasses
  // }

  return (
    <div className="classContainer">
      <Container>
        <h1>Listado de clases</h1>
        {/* hay que pasarle las clases por props */}
        <ClassesList />
      </Container>
    </div>
  )
}

export default ClassesPage