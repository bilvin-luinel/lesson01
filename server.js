const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const app = express();

//미들웨어 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


//서버 실행
const port = process.env.PORT || 8585;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



//
const userId = "admin"
const userPassword = "1234"


//엔드포인트 설정
app.post('/test', async (req, res) => {
    const { id, password } = req.body
    
    try {
        console.log('신호 전달 받음', id, password)

        if (id === userId && password === userPassword) {
            const token = jwt.sign({
                userId: id,
            },
                'secret',
                {
                    expiresIn: '2m'
                }
            )
            res.status(200).json({ token: token })
        } else {
            res.status(400).json()
        }
    } catch (err) {
        console.log('server error', err)
        res.status(500).json({ message: "Server Error" })
    }
})