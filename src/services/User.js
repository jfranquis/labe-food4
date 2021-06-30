import axios from "axios"
import { axiosConfig, BASE_URL } from "../constants/urls"
import { goToFeed, goToSignUpAdd } from '../Routes/coordinator'

export const login = (body, clear, history, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/login`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            clear()
            setIsLoading(false)
            goToFeed(history)
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data.message)
        })
}

export const signup = (body, clear, history) => {
    axios.post(`${BASE_URL}/signup`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            clear()
            goToSignUpAdd(history)
            console.log(response.data.message)
        })
        .catch((error) => {
            alert('dados inválidos')
            console.log(error.response.data.message)
        })
}

export const addaddress = (body, clear, history) => {
    axios.put(`${BASE_URL}/address`, body, axiosConfig)
        .then(response => {
            localStorage.setItem('token', response.data.token)
            clear()
            alert('Cadastro feito com sucesso!')
            goToFeed(history)
        }).catch((error) => {
            console.log(error.response.data.message)
            alert('Erro na criação do  cadastro')
        })
}
