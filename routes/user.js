var express = require('express')
var router = express.Router()
const { SuccessModel, ErrorModel } = require('../model/resModel')
const { login } = require('../controller/user')
//const { set } = require('../db/redis')

router.post('/login', function(req, res, next) {
  const { username, password } = req.body
  const result = login(username, password) //try to return from user from _db
  return result.then(data => {
    if (data.username) {
      req.session.username = data.username
      req.session.firstName = data.firstname

      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('Login Fail'))
  })
})

router.get('/login-test', (req, res, next) => {
  if (req.session.username) {
    res.json({
      errno: 0,
      msg: 'login success'
    })
    return
  }
  res.json({
    errno: -1,
    msg: 'login fail'
  })
})

// router.get('/session-test', (req, res, next) => {
//   const session = req.session
//   if (session.viewNum == null) {
//     session.viewNum = 0
//   }
//   session.viewNum++

//   res.json({
//     viewNum: session.viewNum
//   })
// })

module.exports = router
