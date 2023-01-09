import axios from 'axios'

const URL = "http://127.0.0.1:8000/api/token/"
const URL_REGISTER = "http://127.0.0.1:8000/api/register/"

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

