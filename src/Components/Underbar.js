import React from 'react'

const Underbar = () => {
    return (
        <div style={{ width: "80vw", height: "100px", margin: "0 auto", display: "flex", position: "relative" }}>
            <div style={{ display: 'flex', flexDirection: "column", width: "55vw", fontSize: "14px" }}>
                <p>상호:뉴치프시크 | 대표:이시욱 | 개인정보관리책임자:이시욱 | 이메일:kingdom6766@naver.com</p>
                <p>주소: 부산 진구 전포대로 229-1 이한빌딩 5층 뉴치프시크 | 사업자등록번호: 162-67-00198 | 통신판매: 2019-부산해운대-0204 | 호스팅제공자: (주)식스샵</p>
                <div style={{ display: "flex", width: '100%', flexWrap: "wrap" }}>
                    <p style={{ marginRight: "20px" }}>안전구매(에스크로)</p>
                    <div style={{ display: 'flex', flexWrap: "wrap" }}>
                        <p style={{ marginRight: "20px", cursor: "pointer" }}>이용약관</p>
                        <p style={{ marginRight: "20px", cursor: "pointer" }}>개인정보처리방침</p>
                        <p style={{ cursor: "pointer" }}>사업자정보확인</p>
                    </div>
                </div>
            </div>
            <h3 style={{ position: "absolute", right: "0", fontSize: "16px", cursor: "pointer" }}>CONTACT</h3>
        </div>
    )
}

export default Underbar