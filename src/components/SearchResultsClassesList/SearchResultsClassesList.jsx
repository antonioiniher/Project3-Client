import { Link } from "react-router-dom"

const SearchResultsClassesList = ({ results }) => {
    console.log("los results desde el listado", results)

    return (
        <div>
            {
                results.map((e, i) => {
                    return <Link to={`/clases?language=${e}`}><div key={i}>{e}</div></Link>
                })
            }
        </div>
    )
}

export default SearchResultsClassesList