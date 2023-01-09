// A mock function to mimic making an async request for data
import axios from "axios";


const SERVER_URL_GET = "http://127.0.0.1:8000/api/getcategories/"
const SERVER_URL_UPD="http://127.0.0.1:8000/api/updatecategory/"
const SERVER_URL_DEL="http://127.0.0.1:8000/api/deletecategory/"
const SERVER_URL_ADD="http://127.0.0.1:8000/api/addcategory/"



export function getData() {
  return new Promise((resolve) =>
  axios(SERVER_URL_GET).then((res) => resolve({ data: res.data })),
  );
}

export const addData = (newData, token) => {
  // console.log(newData);
  return new Promise((resolve) =>
    axios.post(SERVER_URL_ADD, newData,{
      headers: {
          'Authorization': `Bearer ${token}`
      }
  }).then((res) => resolve({ data: res.data }))
  );
};

export const delData = (id, token) => {
  // console.log(id);
  return new Promise((resolve) =>
    axios.delete(SERVER_URL_DEL+ id,{
      headers: {
          'Authorization': `Bearer ${token}`
      }
  }).then((res) => resolve({ data: res.data }))
  );
};

export function updData(newData,id,token) {
  return new Promise((resolve) =>
    axios.patch(SERVER_URL_UPD +id, newData,{
      headers: {
          'Authorization': `Bearer ${token}`
      }
  }).then((res) => resolve({ data: res.data }))
  );
}
