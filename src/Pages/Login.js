import React from 'react'
import Navbar from '../Components/Navbar'
import Underbar from '../Components/Underbar'

const Login = () => {
   return (
      <div>
         <Navbar />
         <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: "928px", padding: "60px 16px 70px", display: 'flex', flexDirection: "column", alignItems: 'center' }}>
               <div style={{ fontWeight: 'bold', fontSize: "20px", width: "400px", textAlign: "left", marginBottom: "40px" }}>로그인</div>

               <div style={{ fontSize: "14px", color: "#777777", width: "400px", textAlign: "left", marginBottom: "12px" }}>아이디</div>
               <input className='no-focus' type='text' style={{
                  width: "370px", height: "25px", padding: "10px 15px", border: "1px solid rgba(0,0,0,0.3)", fontSize: "16px", marginBottom: "25px"
               }} />
               <div style={{ fontSize: "14px", color: "#777777", width: "400px", textAlign: "left", marginBottom: "12px" }}>비밀번호</div>
               <input className='no-focus' type='password' style={{
                  width: "370px", height: "25px", padding: "10px 15px", border: "1px solid rgba(0,0,0,0.3)", fontSize: "16px", marginBottom: "25px"
               }} />

               <div style={{ display: "flex" }}>
                  <p style={{ fontSize: '14px', cursor: "pointer", marginRight: "30px" }}>비밀번호 찾기</p>
                  <p style={{ fontSize: '14px', cursor: "pointer" }}>비회원 주문 조회하기</p>
               </div>

               <div style={{
                  width: "240px", height: "54px", border: "none", borderRadius: "3px",
                  display: 'flex', justifyContent: 'center', alignItems: "center", marginTop:"30px"
               }} className='go-to-login'>
                  로그인하기
               </div>
               <div style={{
                  width: "240px", height: "54px", border:"1px solid black", borderRadius: "3px",
                  display: 'flex', justifyContent: 'center', alignItems: "center", marginTop:"20px"
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