const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const app = express();


const Item = require('./models/Item')
const User = require('./models/User')




//서버 실행
const port = process.env.PORT || 3000;
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
      // const newItem = new Item({
      //    code: 1000,
      //    name: 'noop collar over mtm',
      //    price: 59000,
      //    explanation: '돈 아깝다 아무리 봐도',
      //    color: ['black', 'white', 'gray'],
      //    category: 1,
      //    img: ['item1.jpg'],
      //    best: false,
      //    sale: false,
      // })
      // const newItem = new Item({
      //    code: 1001,
      //    name: 'PARIS cable knit',
      //    price: 48000,
      //    explanation: '파리와 무슨 연관인지는 모르겠다. 니트인 것 같다.',
      //    color: ['black', 'cream', 'gray', 'navy'],
      //    category: 1,
      //    img: ['item2.jpg'],
      //    best: false,
      //    sale: false,
      // })
      // const newItem = new Item({
      //    code: 2000,
      //    name: 'parachute cargo denim pants',
      //    price: 69000,
      //    explanation: '이름을 왜 다 영어로 짓는 걸까 한국 쇼핑몰인데...',
      //    color: ['gray','black'],
      //    category: 2,
      //    img: ['item3.jpg'],
      //    best: false,
      //    sale: false,
      // })
      const newItem = new Item({
         code: 3000,
         name: 'effect crack suede jacket',
         price: 96000,
         explanation: '이제 이거 두어 개 살 돈으로 정장을 한 벌 사는 게 맞지 않나..',
         color: ['black','charcoal'],
         category: 3,
         img: ['item4.jpg'],
         best: false,
         sale: false,
      })
      const alreadyItem = await Item.findOne({code: newItem.code})
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
      console.log(er)
   }
}

// newUser()
// newItem()