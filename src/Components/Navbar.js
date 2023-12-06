import jwtDecode from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updatePoint } from '../redux/actions/pointAction';


const Navbar = () => {

   const dispatch = useDispatch()
   const currentPoint = useSelector((state) => state.point.point)

   useEffect(() => {
      if (!localStorage.getItem('token')) {
         return
      } else {
         fetchPoint()
      }
   }, [dispatch])

   const fetchPoint = async () => {
      const response = await fetch('http://172.30.1.79:8585/fetch-point', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            userId: jwtDecode(localStorage.getItem('token')).userId
         })
      })
      if (response.status === 200) {
         const data = await response.json()
         dispatch(updatePoint(data))
      }
   }








   const navigate = useNavigate()

   const [isLogin, setIsLogin] = useState(false)
   const [isSearch, setIsSearch] = useState(false)

   const [isManager, setIsManager] = useState(false)

   useEffect(() => {
      if (localStorage.getItem('token')) {
         setIsLogin(true)
         checkAdmin()
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

   const checkAdmin = async () => {
      const response = await fetch('http://172.30.1.79:8585/check-admin', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            userId: jwtDecode(localStorage.getItem('token')).userId
         })
      })
      if (response.status === 200) {
         setIsManager(true)
      }
   }

   return (
      <div style={{ width: "99vw", padding: "15px 0 30px", display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
         <div style={{ marginBottom: "40px" }}>
            <h3 style={{ fontSize: "35px", fontWeight: "normal", cursor: "pointer" }} onClick={() => navigate('/')}>New Cheap Chic</h3>
         </div>
         <div style={{ display: "flex" }}>
            <div style={{ display: "flex", justifyContent: "space-between", width: "450px" }}>
               <p style={{ cursor: 'pointer' }} onClick={() => navigate('/nccdp')}>NCC D.P</p>
               <p style={{ cursor: 'pointer' }} className='navbar-menu-shop'>SHOP</p>
               <p style={{ cursor: 'pointer' }}>LOOK</p>
               <p style={{ cursor: 'pointer' }}>REVIEW</p>
               <p style={{ cursor: 'pointer' }}>Q&A</p>
               <p style={{ cursor: 'pointer' }}>NOTICE</p>
               <div className='navbar-menu-shop-detail' style={{
                  width: "80px", height: "200px", border: "1px solid rgba(0,0,0,0.1)", position: "absolute", padding: "10px", backgroundColor: 'white',
                  marginTop: "22px", marginLeft: "90px", display: "flex", flexDirection: 'column', justifyContent: "space-between"
               }}>
                  <p style={{ cursor: 'pointer' }} onClick={() => navigate('/dolim')}>NEW 10%</p>
                  <p style={{ cursor: 'pointer' }}>BEST</p>
                  <p style={{ cursor: 'pointer' }}>OUTER</p>
                  <p style={{ cursor: 'pointer' }}>TOP</p>
                  <p style={{ cursor: 'pointer' }}>TROUSERS</p>
                  <p style={{ cursor: 'pointer' }}>ACC</p>
                  <p style={{ cursor: 'pointer' }}>SALE</p>
               </div>
            </div>

            {isSearch === true ? (
               <div style={{ position: 'absolute', right: "50px", display: 'flex', width: "150px", justifyContent: "space-between", alignItems: "center" }}>
                  <img src={`${process.env.PUBLIC_URL}/img/search_icon.png`} style={{ width: "30px" }} onClick={() => setIsSearch(false)} alt='' />
                  <input className='no-focus' style={{ width: "120px", height: "20px", border: "1px solid black" }} />
               </div>
            ) : (
               <div style={{ position: 'absolute', right: "50px", display: 'flex', width: isManager ? '320px' : '250px', justifyContent: "space-between" }}>
                  {currentPoint && (
                     <p>Point : {currentPoint}</p>
                  )}
                  
                  {isManager && (
                     <p style={{ cursor: "pointer" }} onClick={() => navigate('/admin/main')}>운영자</p>
                  )}


                  <p style={{ cursor: "pointer" }} onClick={() => setIsSearch(true)}>Search</p>


                  {/* <p style={{ cursor: "pointer" }} onClick={() => navigate('/login')}>Log in</p> */}
                  <p style={{ cursor: "pointer" }} onClick={handleClickLogin}>{isLogin === true ? "Log out" : "Log in"}</p>


                  <p style={{ cursor: "pointer" }}>Cart</p>
               </div>
            )}







         </div>
      </div>
   )
}

export default Navbar