import axios from 'axios'

const URL = "https://project-patisserie.onrender.com/api/token/"
const URL_REGISTER = "https://project-patisserie.onrender.com/api/register/"

// async(2)
// singin
export function signin(data) {
    return new Promise((resolve) =>
        axios.post(URL, data).then((res) => resolve({ data: res.data }))
    );
}

// async(2)
// register\ singup
export function signUp(newData) {
    return new Promise((resolve) =>
        axios.post(URL_REGISTER, newData).then((res) => resolve({ data: res.data }))
    );
}

