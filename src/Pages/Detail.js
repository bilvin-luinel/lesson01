import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Underbar from '../Components/Underbar'

const Detail = () => {

   const { id } = useParams()

   const navigate = useNavigate()

   const [isLogin, setIsLogin] = useState(false)
   const [item, setItem] = useState({})


   useEffect(() => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   }, [])

   useEffect(() => {
      if (localStorage.getItem('token')) {
         setIsLogin(true)
      } else {
         setIsLogin(false)
      }
   }, [])

   useEffect(() => {
      fetchData()
   }, [])

   useEffect(() => {
      if (item.color) {
         console.log('item : ', item.color[0])
      }
   }, [item])


   const fetchData = async () => {
      try {
         const response = await fetch('http://172.30.1.99:8585/fetch-data-detail', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               itemCode: id
            })
         })
         if (response.status === 200) {
            const data = await response.json()
            setItem(data)
         }
      } catch (err) {
         console.log('loading error', err)
      }
   }


   const handleAddCart = () => {
      if (isLogin) {
         alert('준비 중입니다...')
      } else {
         navigate('/login')
      }
   }

   return (
      <div>
         <Navbar />

         <div style={{ width: "83vw", minHeight: "500px", margin: '50px auto', display: 'flex', justifyContent: "space-between" }}>

            {/* <img src={`${process.env.PUBLIC_URL}/img/item${id}.jpg`} style={{ width: "50vw" }} alt='' /> */}
            {item.img?.[0] && (
               <img src={`${process.env.PUBLIC_URL}/img/${item.img[0]}`} style={{ width: "50vw" }} alt='' />
            )}

            <div style={{ width: '26vw',marginTop:"30px"}}>
               {/* <h3 style={{ fontSize: "32px" }}>noop collar over mtm</h3> */}
               <h3 style={{ fontSize: "32px" }}>{item.name}</h3>

               {/* <h3 style={{ fontSize: "20px", marginTop: "40px" }}>59,000원</h3> */}
               <h3 style={{ fontSize: "20px", marginTop: "40px" }}>{item.price && item.price.toLocaleString()}원</h3>
               <div style={{ display: 'flex', marginTop: "40px", fontSize: '14px', color: 'rgba(0,0,0,0.7)' }}>
                  <p style={{ width: '100px', fontWeight: "bold" }}>적립금</p>
                  <p>1%</p>
               </div>
               <div style={{ display: 'flex', marginTop: "20px", fontSize: '14px', color: 'rgba(0,0,0,0.7)' }}>
                  <p style={{ width: '100px', fontWeight: "bold" }}>배송비</p>
                  <div>
                     <p>3,000원 (100,000원 이상 구매 시 무료)</p>
                     <p>제주 3,000원, 제주 외 도서 산간 5,000원 추가</p>
                  </div>
               </div>
               <p style={{ fontSize: "13px", color: 'rgba(0,0,0,0.7)', marginTop: "50px" }}>color</p>
               <select className='no-focus' style={{ width: "130px", height: "40px", border: "1px solid rgba(0,0,0,0.2)", marginTop: '10px', color: 'rgba(0,0,0,0.5)', fontSize: '16px' }}>
                  <option value=''>선택하세요.</option>
                  {/* <option value='black'>black</option>
                  <option value='white'>white</option>
                  <option value='gray'>gray</option> */}
                  {item.color?.[0] && (
                     item.color.map((color, index) => (
                        <option value={color}>{color}</option>
                     ))
                  )}
               </select>
               <div style={{ width: '100%', height: '1px', borderTop: '1px solid rgba(0,0,0,0.3)', marginTop: '40px' }} />
               <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', fontSize: '14px', marginTop: '50px' }}>
                  <p style={{ fontWeight: 'bold' }}>주문 수량</p>
                  <p>0개</p>
               </div>
               <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', fontSize: '14px', marginTop: '15px' }}>
                  <p style={{ fontWeight: 'bold' }}>총 상품 금액</p>
                  <p>0원</p>
               </div>
               <div style={{ display: 'flex', marginTop: '40px' }}>
                  <div style={{
                     width: '10vw', maxWidth: "160px", height: "54px",
                     border: "none", borderRadius: "3px", cursor: "pointer",
                     display: 'flex', justifyContent: 'center', alignItems: "center", marginRight: '20px'
                  }}
                     className='go-to-login'>
                     구매하기
                  </div>

                  <div style={{
                     width: '10vw', maxWidth: "160px", height: "54px", border: "1px solid black", borderRadius: "3px", cursor: 'pointer',
                     display: 'flex', justifyContent: 'center', alignItems: "center",
                  }} className='go-to-signup' onClick={handleAddCart}>
                     장바구니에 담기
                  </div>
               </div>
               <img src={`${process.env.PUBLIC_URL}/img/naver_pay_buy.png`} style={{ marginTop: '30px', cursor: 'pointer' }} alt='' />
            </div>
         </div>

         <Underbar />
      </div>
   )
}

export default Detail