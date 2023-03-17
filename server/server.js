const express = require('express')
const cors = require('cors')
const { response } = require('express')
const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Listening on port ${port}`))

// Store and retrieve your videos from here
// If you want, you can copy "exampleresponse.json" into here to have some data to work with
let videoData = [
  {
    id: 523523,
    title: 'Never Gonna Give You Up',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    rating: 23,
  },
  {
    id: 523427,
    title: 'The Coding Train',
    url: 'https://www.youtube.com/watch?v=HerCR8bw_GE',
    rating: 230,
  },
  {
    id: 82653,
    title: 'Mac & Cheese | Basics with Babish',
    url: 'https://www.youtube.com/watch?v=FUeyrEN14Rk',
    rating: 2111,
  },
  {
    id: 858566,
    title: 'Videos for Cats to Watch - 8 Hour Bird Bonanza',
    url: 'https://www.youtube.com/watch?v=xbs7FT7dXYc',
    rating: 11,
  },
  {
    id: 283634,
    title: "Learn Unity - Beginner's Game Development Course",
    url: 'https://www.youtube.com/watch?v=gB1F9G0JXOo',
    rating: 211,
  },
  {
    id: 562824,
    title: 'Cracking Enigma in 2021 - Computerphile',
    url: 'https://www.youtube.com/watch?v=RzWB5jL5RX0',
    rating: 111,
  },
  {
    id: 442452,
    title: 'Coding Adventure: Chess AI',
    url: 'https://www.youtube.com/watch?v=U4ogK0MIzqk',
    rating: 671,
  },
  {
    id: 536363,
    title: 'Coding Adventure: Ant and Slime Simulations',
    url: 'https://www.youtube.com/watch?v=X-iSQQgOd1A',
    rating: 76,
  },
  {
    id: 323445,
    title: 'Why the Tour de France is so brutal',
    url: 'https://www.youtube.com/watch?v=ZacOS8NBK6U',
    rating: 73,
  },
]

app.get('/', (req, res) => {
  res.send(videoData)
})

app.post('/add', (req, res) => {
  console.log('hello world')
  res.json({
    id: 435535,
    title: 'Man City vs RB Leipzig (7-0)',
    url: 'https://www.youtube.com/watch?v=R3_0kiIBp9c',
    rating: 5473,
  })
})

// app.delete('/delete/:id', (req, res) => {
//   const id = req.params.id
//   const deletedVid = videoData.find((vid) => {
//     vid.id === id
//   })
//   if (deletedVid) {
//     videoData.splice(deletedVid, 1)
//     res.json({ Response: 'Video successfuly deleted' })
//   } else {
//     res.json({ Response: 'Error' })
//   }
// })
