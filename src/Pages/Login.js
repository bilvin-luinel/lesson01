import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Underbar from '../Components/Underbar'
import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [])



  const handleLogin = async () => {
    const response = await fetch('http://172.30.1.67:8585/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        password: password
      })
    })
    if (response.status === 200) {
      const { token } = await response.json();
      localStorage.setItem('token', token);
      navigate('/')
    } else {
      alert('잘못된 아이디 또는 비밀번호입니다.')
    }
  }

  const handleKeyDownLogin = (e) => {
    const key = e.code;
    switch (key) {
      case 'Enter':
        handleLogin();
        break;
      default:
    }
  }


  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: "928px", padding: "60px 16px 70px", display: 'flex', flexDirection: "column", alignItems: 'center' }}>
          <div style={{ fontWeight: 'bold', fontSize: "20px", width: "400px", textAlign: "left", marginBottom: "40px" }}>로그인</div>

          <div style={{ fontSize: "14px", color: "#777777", width: "400px", textAlign: "left", marginBottom: "12px" }}>아이디</div>
          <input className='no-focus' type='text' style={{
            width: "370px", height: "25px", padding: "10px 15px",
            border: "1px solid rgba(0,0,0,0.3)", fontSize: "16px", marginBottom: "25px"
          }} value={id} onChange={(e) => setId(e.target.value)} onKeyDown={handleKeyDownLogin}
          />


          <div style={{ fontSize: "14px", color: "#777777", width: "400px", textAlign: "left", marginBottom: "12px" }}>비밀번호</div>
          <input className='no-focus' type='password' style={{
            width: "370px", height: "25px", padding: "10px 15px", border: "1px solid rgba(0,0,0,0.3)", fontSize: "16px", marginBottom: "25px"
          }} value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={handleKeyDownLogin} />

          <div style={{ display: "flex" }}>
            <p style={{ fontSize: '14px', cursor: "pointer", marginRight: "30px" }}>비밀번호 찾기</p>
            <p style={{ fontSize: '14px', cursor: "pointer" }}>비회원 주문 조회하기</p>
          </div>




          {/* <div style={{
            width: "240px", height: "54px", border: "none", borderRadius: "3px", cursor: "pointer",
            display: 'flex', justifyContent: 'center', alignItems: "center", marginTop: "30px"
          }} className='go-to-login' onClick={handleLogin}>
            로그인하기
          </div> */}
          <div style={{
            width: "240px", height: "54px",
            border: "none", borderRadius: "3px", cursor: "pointer",
            display: 'flex', justifyContent: 'center', alignItems: "center",
            marginTop: "30px"
          }}
            className='go-to-login'
            onClick={handleLogin}>
            로그인하기
          </div>

          <div style={{
            width: "240px", height: "54px", border: "1px solid black", borderRadius: "3px", cursor: 'pointer',
            display: 'flex', justifyContent: 'center', alignItems: "center", marginTop: "20px"
          }} className='go-to-signup'>
            회원 가입하기
          </div>



        </div>
      </div>
      <Underbar />
    </div>
  )
}

export default Login