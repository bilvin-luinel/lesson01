import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import Navbar_Admin from '../Components/Navber_Admin'
import Admin_User from '../Components/Admin_User'

const Admin = () => {

   const { id } = useParams()

   const [token, setToken] = useState({})
   const navigate = useNavigate()

   useEffect(() => {
      if (!localStorage.getItem('token')) {
         navigate('/')
      }
      else {
         checkAdmin()
      }
   }, [])

   const checkAdmin = async () => {
      const response = await fetch('http://172.30.1.48:8585/check-admin', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            userId: jwtDecode(localStorage.getItem('token')).userId
         })
      })
      if (response.status !== 200) {
         navigate('/')
      }
   }

   return (
      <div>
         <Navbar_Admin />
         {id === 'main' && (
            <p onClick={() => navigate('/admin/user')}>main</p>
         )}
         {id === 'user' && (
            <Admin_User />
         )}

      </div>
   )
}

export default Admin