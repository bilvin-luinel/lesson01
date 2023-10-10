import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Underbar from '../Components/Underbar'

const Home = () => {

  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLogin(true)
    }
  }, [])

  return (
    <div>
      <Navbar />

      <div style={{ width: "85vw", maxWidth: "1168px", margin: "0 auto" }}>
        <img src={`${process.env.PUBLIC_URL}/img/home_main.jpg`} alt='' style={{ width: "100%" }} />
      </div>
      
      <div style={{ width: "85vw", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", justifyItems: "center" }}>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }}>
          <img src={`${process.env.PUBLIC_URL}/img/item1.jpg`} alt='' style={{ width: "100%" }} />
          <p style={{fontWeight:"bold",marginTop:"0.7vw",fontSize:"0.9vw"}}>noop collar over mtm</p>
          <p style={{marginTop:"0.7vw",fontSize:"0.9vw"}}>59,000원</p>
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }}>
          <img src={`${process.env.PUBLIC_URL}/img/item2.jpg`} alt='' style={{ width: "100%", height: "33.324vw" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }}>
          <img src={`${process.env.PUBLIC_URL}/img/item3.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }}>
          <img src={`${process.env.PUBLIC_URL}/img/item4.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }}>
          <img src={`${process.env.PUBLIC_URL}/img/item5.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }}>
          <img src={`${process.env.PUBLIC_URL}/img/item6.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }}>
          <img src={`${process.env.PUBLIC_URL}/img/item7.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }}>
          <img src={`${process.env.PUBLIC_URL}/img/item8.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }}>
          <img src={`${process.env.PUBLIC_URL}/img/item9.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }}>
          <img src={`${process.env.PUBLIC_URL}/img/item10.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }}>
          <img src={`${process.env.PUBLIC_URL}/img/item11.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }}>
          <img src={`${process.env.PUBLIC_URL}/img/item12.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }}>
          <img src={`${process.env.PUBLIC_URL}/img/item13.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }}>
          <img src={`${process.env.PUBLIC_URL}/img/item14.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }}>
          <img src={`${process.env.PUBLIC_URL}/img/item15.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }}>
          <img src={`${process.env.PUBLIC_URL}/img/item16.jpg`} alt='' style={{ width: "100%" }} />
        </div>
      </div>

      <Underbar />
    </div>
  )
}

export default Home