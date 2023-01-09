import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { doSigninAsync, selectEmail, selectUserName, logout, selectToken, doSignupAsync, selectStaff } from './loginSlice'

export const Login = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const userName = useSelector(selectUserName);
  const token = useSelector(selectToken);
  const isStaff = useSelector(selectStaff);

  const [newUserName, setNewUserName] = useState("")
  const [newPwd, setNewPwd] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [staff, setStaff] = useState(false);

  return (
    
    <div class="w3-sand w3-grayscale w3-large" >
      {/* // <div style={{backgroundColor:"green"}}> */}
      {/* for presentation */}

      {userName && <div>Welcome {userName} ! Are you defined as staff? {isStaff ? "Yes" : "No, work harder"} </div>}
      {/* {email && <div> Email: {email}</div>}
        {token && <div> token: {token}</div>} */}
      <br />


      Name:  <input onChange={(e) => setNewUserName(e.target.value)} /><br /><br />
      Pwd:  <input onChange={(e) => setNewPwd(e.target.value)} type='password' /><br /><br />
      Email:  <input onChange={(e) => setNewEmail(e.target.value)} /><br /><br />
      {token && <div>Staff: <input onChange={(e) => setStaff(e.target.checked)} type={"checkbox"} /></div>}
      <br /><br />

      <button onClick={() => dispatch(doSigninAsync({ username: newUserName, password: newPwd }))}>Login</button>{" "}
      <button onClick={() => dispatch(logout({ id: 3, "name": "dany", "email": "aaa@" }))}>Logout</button><br /><br />
      <button onClick={() => dispatch(doSignupAsync({ username: newUserName, password: newPwd, email: newEmail, staff: staff }))}>register</button>{" "}
      
    </div>
  )
}

