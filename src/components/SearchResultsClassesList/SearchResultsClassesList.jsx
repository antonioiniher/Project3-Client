import './SearchResultsClassesList.css'
import { Link } from "react-router-dom"

const SearchResultsClassesList = ({ results }) => {

    return (
        <div>
            {
                results.map((e, i) => {
                    return (
                        <>
                            <div className="SearchResultsClassesList">
                                <Link className='searchResultsLink' to={`/clases?language=${e}`}><div key={i}>{e}</div></Link>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default SearchResultsClassesList