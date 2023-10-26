import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

const Admin = () => {

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
      const response = await fetch('http://182.209.228.24:8585/check-admin', {
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
         <Navbar />

         어드민
      </div>
   )
}

export default Admin