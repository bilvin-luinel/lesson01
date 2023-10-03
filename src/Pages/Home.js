import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'

const Home = () => {

  const [isLogin, setIsLogin] = useState(false)

  useEffect(()=>{
    if (localStorage.getItem('token')) {
      setIsLogin(true)
    }
  },[])
  
  return (
    <div>
        <Navbar />
    </div>
  )
}

export default Home