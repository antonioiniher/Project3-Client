import axios from "axios";


class ClassServices {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/class`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    searchClassAndAccept(classes_id, booking_id, status) {
        return this.api.put(`/searchClassAndAccept`, { classes_id, booking_id, status })
    }

    create(classData) {
        return this.api.post("/create", classData)
    }
    getClasses() {
        return this.api.get("/all")
    }

    getClassbySearch(language, classType) {
        return this.api.get('/', {
            params: {
                language: language,
                classType: classType
            }
        })
    }

    putClassRequest(student_id, class_id) {
        return this.api.put(`/putClassRequest/${class_id}`, { student_id })
    }

    getClassByStudent(user_id) {
        return this.api.get(`/getClassByStudent/${user_id}`)
    }


    getClassByTeacher() {
        return this.api.get(`/getClassByTeacher`)
    }

    getOneClass(class_id) {
        return this.api.get(`/${class_id}`)
    }

}

const classService = new ClassServices()

export default classService