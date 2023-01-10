// A mock function to mimic making an async request for data
import axios from "axios";


const SERVER_URL_GET_PER_CAT="https://project-patisserie.onrender.com/api/getproductspercat/"
// const SERVER_URL_GET="https://project-patisserie.onrender.com/api/getproduct/"
const SERVER_URL_UPD="https://project-patisserie.onrender.com/api/updateproduct/"
const SERVER_URL_DEL="https://project-patisserie.onrender.com/api/deleteproduct/"
const SERVER_URL_ADD="https://project-patisserie.onrender.com/api/addproduct/"


export function getData(cat_id) {
  return new Promise((resolve) =>
  axios(SERVER_URL_GET_PER_CAT + cat_id).then((res) => resolve({ data: res.data })),
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
