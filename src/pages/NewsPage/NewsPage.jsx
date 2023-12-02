import newsService from "../../services/News.services";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./NewsPage.css"
import { Link } from "react-router-dom";

const News = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        newsService
            .getNews()
            .then(response => { setNews(response.data.articles) })
            .catch(err => console.log(err))
    })
    console.log(news)
    return (
        news?.map(e => {
            return (
                <div className="allNewsPage">
                    <Container>
                        <div className="eachNew">
                            <h2>{e.title}</h2>
                            <p>{e.description}</p>
                            <Link to={e.url} className="linkNews">Llévame a la noticia </Link>
                            <p className="sourceName">Fuente: {e.source.name}</p>
                        </div>
                    </Container >
                </div >
            )
        })
    )
}


export default News