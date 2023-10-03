import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

   const navigate = useNavigate()

   const [isLogin, setIsLogin] = useState(false)

   useEffect(() => {
      if (localStorage.getItem('token')) {
         setIsLogin(true)
      } else {
         setIsLogin(false)
      }
   }, [])

   const handleClickLogin = () => {
      if (isLogin === true) {
         localStorage.removeItem('token')
         window.location.href = '/'
      } else {
         navigate('/login')
      }
   }

   return (
      <div style={{ width: "100vw", padding: "15px 0 30px", display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
         <div style={{ marginBottom: "40px" }}>
            <h3 style={{ fontSize: "35px", fontWeight: "normal", cursor: "pointer" }} onClick={() => navigate('/')}>New Cheap Chic</h3>
         </div>
         <div style={{ display: "flex" }}>
            <div style={{ display: "flex", justifyContent: "space-between", width: "450px" }}>
               <p style={{ cursor: "pointer" }} onClick={()=>navigate('/nccdp')}>NCC D.P</p>
               <p style={{ cursor: "pointer" }}>SHOP</p>
               <p style={{ cursor: "pointer" }}>LOOK</p>
               <p style={{ cursor: "pointer" }}>REVIEW</p>
               <p style={{ cursor: "pointer" }}>Q&A</p>
               <p style={{ cursor: "pointer" }}>NOTICE</p>
            </div>
            <div style={{ position: 'absolute', right: "50px", display: 'flex', width: "150px", justifyContent: "space-between" }}>
               <p style={{ cursor: "pointer" }}>Search</p>
               {/* <p style={{ cursor: "pointer" }} onClick={() => navigate('/login')}>Log in</p> */}
               <p style={{ cursor: "pointer" }} onClick={handleClickLogin}>{isLogin === true ? "Log out" : "Log in"}</p>
               <p style={{ cursor: "pointer" }}>Cart</p>
            </div>
         </div>
      </div>
   )
}

export default Navbar