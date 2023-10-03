import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'

const NccDp = () => {

   const [bettingMoney, setBettingMoney] = useState()
   const [currentMoney, setCurrentMoney] = useState(100000)

   const [showResult, setShowResult] = useState(false)


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

         </div>
      </div>
   )
}

export default NccDp