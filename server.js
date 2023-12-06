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

app.get('/fetch-data-home', async (req, res) => {
    try {
        const items = await Item.find()
        res.send(items)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
app.post('/fetch-data-detail', async (req, res) => {
    const { itemCode } = req.body;
    try {
        const item = await Item.findOne({ code: itemCode })
        if (item) {
            res.status(200).json(item)
        } else {
            res.status(404).json()
        }
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

app.post('/check-admin', async (req, res) => {
    const { userId } = req.body
    try {
        const user = await User.findById(userId)
        if (user) {
            if (user.grade === 6) {
                res.status(200).json()
            } else {
                res.status(400).json()
            }
        } else {
            res.status(400).json()
        }
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
app.post('/fetch-point',async(req,res)=>{
    const {userId} = req.body

    try{
        const user = await User.findById(userId)
        const point = user.point

        res.status(200).json(point)

    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})
app.post('/add-point-1000',async (req,res) => {
    const {userId} = req.body
    try{
        const user = await User.findById(userId)
        if (user) {
            user.point+=1000
            await user.save()
            res.status(200).json()
        }
        
    } catch(err){
        console.log(err)
    }
})






//회원 , 아이템 추가 함수
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
        console.log(err)
    }
}
const newItem = async () => {
    try {
        const newItem = new Item({
            code: 3000,
            name: 'effect crack suede jacket',
            price: 96000,
            explanation: '이제 이거 두어 개 살 돈으로 정장을 한 벌 사는 게 맞지 않나..',
            color: ['black', 'charcoal'],
            category: 3,
            img: ['item4.jpg'],
            best: false,
            sale: false,
        })
        const alreadyItem = await Item.findOne({ code: newItem.code })
        if (alreadyItem) {
            console.log('중복된 코드입니다.')
            return
        } else {
            const savedItem = await newItem.save()
            if (savedItem) {
                console.log('새로운 아이템 정보 저장됨.', savedItem.name)
            }
        }
    } catch (err) {
        console.log(err)
    }
}

// newUser()
// newItem()


