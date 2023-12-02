import axios from "axios"

class NewsService {

    constructor() {


    }

    getNews() {
        return axios.get('https://newsapi.org/v2/everything?q=javascript&language=es&apiKey=a566fa86d9d24b559cab1e0823f2d409')
    }

}

const newsService = new NewsService()

export default newsService