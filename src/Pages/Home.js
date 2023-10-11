import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Underbar from '../Components/Underbar'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()


  const [isLogin, setIsLogin] = useState(false)
  const [items, setItems] = useState([])


  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLogin(true)
    }
  }, [])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('http://172.30.1.86:8585/fetch-data-home')
      const data = await response.json()
      setItems(data)
    } catch (err) {
      console.log('loading error', err)
    }
  }




  return (
    <div>
      <Navbar />

      <div style={{ width: "85vw", maxWidth: "1168px", margin: "0 auto" }}>
        <img src={`${process.env.PUBLIC_URL}/img/home_main.jpg`} alt='' style={{ width: "100%" }} />
      </div>

      <div style={{ width: "85vw", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", justifyItems: "center" }}>

        {items.map((item, index) => (
          <div key={index} style={{ width: "25vw", height: "40vw", cursor: "pointer" }} onClick={() => navigate(`/detail/${item.code}`)}>
            {item.img[0] && (
              <img src={`${process.env.PUBLIC_URL}/img/${item.img[0]}`} style={{ width: "100%", height: "33.3vw" }} alt='' />
            )}
            <p style={{ fontWeight: "bold", marginTop: "0.7vw", fontSize: "0.9vw" }}>{item.name}</p>
            <p style={{ marginTop: "0.7vw", fontSize: "0.9vw" }}>{item.price.toLocaleString()}원</p>
          </div>
        ))}



        {/* <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }} onClick={()=>navigate('/detail/1')}>
          <img src={`${process.env.PUBLIC_URL}/img/item1.jpg`} alt='' style={{ width: "100%" }} />
          <p style={{fontWeight:"bold",marginTop:"0.7vw",fontSize:"0.9vw"}}>noop collar over mtm</p>
          <p style={{marginTop:"0.7vw",fontSize:"0.9vw"}}>59,000원</p>
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }} onClick={()=>navigate('/detail/2')}>
          <img src={`${process.env.PUBLIC_URL}/img/item2.jpg`} alt='' style={{ width: "100%", height: "33.324vw" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }} onClick={()=>navigate('/detail/3')}>
          <img src={`${process.env.PUBLIC_URL}/img/item3.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }} onClick={()=>navigate('/detail/4')}>
          <img src={`${process.env.PUBLIC_URL}/img/item4.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }} onClick={()=>navigate('/detail/5')}>
          <img src={`${process.env.PUBLIC_URL}/img/item5.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }} onClick={()=>navigate('/detail/6')}>
          <img src={`${process.env.PUBLIC_URL}/img/item6.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }} onClick={()=>navigate('/detail/7')}>
          <img src={`${process.env.PUBLIC_URL}/img/item7.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }} onClick={()=>navigate('/detail/8')}>
          <img src={`${process.env.PUBLIC_URL}/img/item8.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }} onClick={()=>navigate('/detail/9')}>
          <img src={`${process.env.PUBLIC_URL}/img/item9.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }} onClick={()=>navigate('/detail/10')}>
          <img src={`${process.env.PUBLIC_URL}/img/item10.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }} onClick={()=>navigate('/detail/11')}>
          <img src={`${process.env.PUBLIC_URL}/img/item11.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }} onClick={()=>navigate('/detail/12')}>
          <img src={`${process.env.PUBLIC_URL}/img/item12.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }} onClick={()=>navigate('/detail/13')}>
          <img src={`${process.env.PUBLIC_URL}/img/item13.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }} onClick={()=>navigate('/detail/14')}>
          <img src={`${process.env.PUBLIC_URL}/img/item14.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }} onClick={()=>navigate('/detail/15')}>
          <img src={`${process.env.PUBLIC_URL}/img/item15.jpg`} alt='' style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25vw", height: "40vw", cursor:"pointer" }} onClick={()=>navigate('/detail/16')}>
          <img src={`${process.env.PUBLIC_URL}/img/item16.jpg`} alt='' style={{ width: "100%" }} />
        </div> */}


      </div>

      <Underbar />
    </div>
  )
}

export default Home