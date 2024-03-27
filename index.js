const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => { //http://localhost:3000 --> 주소
  res.send('Hello World!')
})

app.get('/dog', (req, res) => { 
    res.send('강아지')
  })

  app.get('/cat', (req, res) => { 
    res.send('고양이')
  })

  app.get('/user/:id', (req, res) => { // user 요청 받고 출력 :id 
    // const q = req.params
    // console.log(q)
    const q = req.query //http://localhost:3000/user/asdf?q=yojun&name=yo&age=23 파라미터 제공
    console.log(q)
    console.log(q.name)

    res.json({'userid' : q.name})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})