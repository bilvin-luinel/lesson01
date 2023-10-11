import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

   const navigate = useNavigate()

   const [isLogin, setIsLogin] = useState(false)
   const [isSearch, setIsSearch] = useState(false)

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
      <div style={{
         width: '99vw', padding: '15px 0 30px', border: '1px solid black', display: 'flex', flexDirection: 'column', justifyContent: 'center',
         alignItems: 'center'
      }}>
         <div>
            <h3 style={{ fontSize: '30px', fontWeight: 'normal', cursor: 'pointer' }} onClick={() => navigate('/')}>new cheap chic</h3>
         </div>
         <div style={{ display: "flex" }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '450px' }}>
               <p className='navbar-p' style={{ cursor: "pointer", marginRight: '25px' }}>ncc d.p</p>
               <p className='navbar-p navbar-menu-shop' style={{ cursor: "pointer", marginRight: '25px' }}>shop</p>
               <p className='navbar-p' style={{ cursor: "pointer", marginRight: '25px' }}>look</p>
               <p className='navbar-p' style={{ cursor: "pointer", marginRight: '25px' }}>review</p>
               <p className='navbar-p' style={{ cursor: "pointer", marginRight: '25px' }}>Q&A</p>
               <p className='navbar-p' style={{ cursor: "pointer" }}>notice</p>
               <div className='navbar-menu-shop-detail' style={{
                  border: '1px solid rgba(0,0,0,0.1)', width: '80px', height: '200px', display: 'flex', flexDirection: 'column',
                  justifyContent: 'space-between', position: 'absolute', marginLeft: '90px', marginTop: '35px', padding: '10px',
                  backgroundColor: 'white'
               }}>
                  <p style={{ cursor: 'pointer', marginTop: "-3px" }}>NEW 10%</p>
                  <p style={{ cursor: 'pointer', marginTop: "-3px" }}>BEST</p>
                  <p style={{ cursor: 'pointer', marginTop: "-3px" }}>OUTER</p>
                  <p style={{ cursor: 'pointer', marginTop: "-3px" }}>TOP</p>
                  <p style={{ cursor: 'pointer', marginTop: "-3px" }}>TROUSERS</p>
                  <p style={{ cursor: 'pointer', marginTop: "-3px" }}>ACC</p>
                  <p style={{ cursor: 'pointer', marginTop: "-3px" }}>SALE</p>

               </div>


               {isSearch === true ? (
                  <div style={{ display: 'flex', fontSize: "14px", position: "absolute", right: "50px" }}>
                     <img src={`${process.env.PUBLIC_URL}/img/searchIcon.png`} style={{ width: '30px', height: '30px' }} onClick={() => setIsSearch(false)} className='go-to-search' alt='' />
                     <input className='no-focus' style={{ width: '120px', height: '20px', border: '1px solid black' }} />
                  </div>
               )
                  :
                  (
                     <div style={{ display: 'flex', fontSize: "14px", position: "absolute", right: "50px" }}>
                        <p className='navbar-p' style={{ cursor: "pointer", marginRight: "20px" }} onClick={() => setIsSearch(true)}>search</p>

                        <p className='navbar-p' style={{ cursor: "pointer", marginRight: "20px" }} onClick={handleClickLogin}>{isLogin === true ? 'Log out' : 'log in'}</p>
                        <p className='navbar-p' style={{ cursor: "pointer" }} onClick={() => navigate('/Cart')}>cart</p>
                     </div>
                  )}
            </div>
         </div>
      </div>
   )
}

export default Navbar2