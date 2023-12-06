import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import jwtDecode from 'jwt-decode'
import { updatePoint } from '../redux/actions/pointAction'

const NccDp = () => {

   const navigate = useNavigate()

   const [bettingMoney, setBettingMoney] = useState()
   const [currentMoney, setCurrentMoney] = useState(100000)

   const [showResult, setShowResult] = useState(false)

   const dispatch = useDispatch()
   const currentPoint = useSelector((state) => state.point.point)


   useEffect(() => {
      if (!localStorage.getItem('token')) {
         navigate('/')
      }
   }, [])

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

   const isNumeric = (value) => {
      // 숫자로만 구성되어 있는지 확인하는 정규 표현식
      const numericRegex = /^[0-9]+$/;

      // 정규 표현식과 매치되면 숫자로만 구성되어 있는 것으로 판별
      return numericRegex.test(value);
   }

   const convertInputMoney = (e) => {
      if (isNumeric(e.target.value) === false) {
         alert('숫자만 입력해 주세요.')
         e.target.value = ''
         setBettingMoney()
      } else {
         setBettingMoney(parseInt(e.target.value))
      }
   }

   const handleClick = (value) => {
      if (bettingMoney === 0 || !bettingMoney || bettingMoney > currentMoney) {
         alert('올바른 금액을 입력해 주세요.')
         return
      }
      const result = randomBoolean()
      if (result === value) {
         const plusMoney = parseInt(currentMoney + (bettingMoney * 0.93))
         setCurrentMoney(plusMoney)
         alert('성공', plusMoney)
         setBettingMoney('')
      } else {
         const minusMoney = parseInt(currentMoney - bettingMoney)
         setCurrentMoney(minusMoney)
         alert('실패', minusMoney)
         setBettingMoney('')
      }
   }

   const randomBoolean = () => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
         return "odd"
      } else {
         return "even"
      }
   }


   const addPoint_1000 = async () => {
      if (localStorage.getItem('token')) {
         const response = await fetch('http://172.30.1.79:8585/add-point-1000', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               userId: jwtDecode(localStorage.getItem('token')).userId
            })
         })
         if (response.status === 200) {
            fetchPoint()
         }
      }
   }

   return (
      <div>
         <Navbar />
         <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div style={{ display: "flex", justifyContent: 'space-between', width: "700px", marginTop: "50px" }}>
               <div style={{
                  width: "300px", height: "200px", border: "none", backgroundColor: "red", borderRadius: "20px", fontWeight: "bold",
                  cursor: "pointer", display: 'flex', justifyContent: 'center', alignItems: "center", color: "white", fontSize: "50px"
               }} onClick={() => handleClick("odd")}>
                  홀
               </div>
               <div style={{
                  width: "300px", height: "200px", border: "none", backgroundColor: "blue", borderRadius: "20px", fontWeight: "bold",
                  cursor: "pointer", display: 'flex', justifyContent: 'center', alignItems: "center", color: "white", fontSize: "50px"
               }} onClick={() => handleClick("even")}>
                  짝
               </div>
            </div>

            <div style={{ marginTop: "50px" }}>
               <input className='no-focus' type='text' style={{
                  width: "160px", height: "30px", border: '1px solid gray', borderRadius: "3px", padding: "0 20px", fontSize: "18px"
               }} placeholder='금액을 입력해 주세요.' value={bettingMoney} onChange={convertInputMoney} />
            </div>
            <p style={{ marginTop: "20px" }}>잔액 : {currentMoney.toLocaleString()}원</p>
            <p style={{ color: "red", marginTop: "10px" }}>성공 시 배팅 금액 x 1.93</p>


            <div style={{
               backgroundColor: 'rgba(0,0,0,0.7)', color: 'white', textAlign: 'center',
               marginTop: '50px', cursor: 'pointer', padding: '10px'
            }} onClick={addPoint_1000}>
               1000점 추가
            </div>

         </div>
      </div>
   )
}

export default NccDp