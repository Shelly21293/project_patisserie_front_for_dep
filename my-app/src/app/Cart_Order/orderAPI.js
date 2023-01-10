// A mock function to mimic making an async request for data
import axios from "axios";


const SERVER_URL_ADD_ORDER = "https://project-patisserie.onrender.com/api/addorder/"
const SERVER_URL_GET_ORDER = "https://project-patisserie.onrender.com/api/getordersforuser/"
const SERVER_URL_GET_ORDER_DETAILS = "https://project-patisserie.onrender.com/api/getorderDetails/"



export function getData1(token) {
  return new Promise((resolve) =>
  axios(SERVER_URL_GET_ORDER, {
    headers: {
        'Authorization': `Bearer ${token}`
    }
}).then((res) => resolve({ data: res.data })),
  );
}

export function getData2(id,token) {
  return new Promise((resolve) =>
  axios(SERVER_URL_GET_ORDER_DETAILS + id, {
    headers: {
        'Authorization': `Bearer ${token}`
    }
}).then((res) => resolve({ data: res.data })),
  );
}

export const addData = (myCart,token) => {
  // console.log(newData);
  return new Promise((resolve) =>
    axios.post(SERVER_URL_ADD_ORDER, myCart, {
      headers: {
          'Authorization': `Bearer ${token}`
      }
  } ).then((res) => resolve({ data: res.data }))
  );
};

// export const delData = (id) => {
//   // console.log(id);
//   return new Promise((resolve) =>
//     axios.delete(SERVER_URL+ id).then((res) => resolve({ data: res.data }))
//   );
// };

// export function updData(newData,id) {
//   return new Promise((resolve) =>
//     axios.put(SERVER_URL +id, newData).then((res) => resolve({ data: res.data }))
//   );
// }
