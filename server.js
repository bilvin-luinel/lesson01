const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const app = express();


const Item = require('./models/Item')
const User = require('./models/User')




//서버 실행
const port = process.env.PORT || 8585;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//MongoDB 연결
mongoose.connect('mongodb+srv://bilvin0709:nalkeok02@cluster0.u6sb7pj.mongodb.net/lesson01')
    .then(() => {
        const db = mongoose.connection;
        console.log('MongoDB Connected in', db.name)
    })
    .catch((err => console.log(err)))





//미들웨어 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



//엔드포인트 설정
app.post('/login', async (req, res) => {
    const { id, password } = req.body

    try {
        const user = await User.findOne({ id: id })
        if (!user) {
            res.status(400).json()
        } else {
            if (password === user.password) {
                const token = jwt.sign({
                    userId: user._id,
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
        }
    } catch (err) {
        console.log('server error', err)
        res.status(500).json({ message: "Server Error" })
    }
})


const newUser = async () => {
    try {
        const newUser = new User({
            id: 'admin',
            password: 'a',
            nickName: '운영자',
        })
        const savedUser = await newUser.save()
        if (savedUser) {
            console.log('새로운 유저 정보 저장됨.', savedUser.id, savedUser.password, savedUser.nickName)
        }
    } catch (err) {
        console.log(er)
    }
}

// newUser()