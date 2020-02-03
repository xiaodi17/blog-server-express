var express = require('express')
var router = express.Router()
const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const loginCheck = require('../middleware/loginCheck')

router.get('/list', (req, res, next) => {
  //req.path is getting from app.js
  let author = req.query.author || ''
  const keyword = req.query.keyword || ''
  console.log(req.session.username)
  if (req.query.isadmin) {
    //admin
    if (req.session.username == null) {
      //login fail
      res.json(new ErrorModel('login fail'))
      return
    }
    //search your own blog

    author = req.session.username
  }

  const result = getList(author, keyword) //result is a promise
  return result.then(listData => {
    res.json(new SuccessModel(listData))
  })
})

router.get('/detail', (req, res, next) => {
  const result = getDetail(req.query.id)
  return result.then(data => {
    res.json(new SuccessModel(data))
  })
})

router.post('/new', loginCheck, (req, res, next) => {
  req.body.author = req.session.username
  const result = newBlog(req.body)
  return result.then(data => {
    res.json(new SuccessModel(data))
  })
})

router.post('/update', loginCheck, (req, res, next) => {
  const result = updateBlog(req.query.id, req.body)
  return result.then(val => {
    if (val) {
      res.json(new SuccessModel())
    } else {
      res.json(new ErrorModel('update blog fail'))
    }
  })
})

router.post('/del', loginCheck, (req, res, next) => {
  const author = req.session.username
  const result = delBlog(req.query.id, author)
  if (result) {
    res.json(new SuccessModel())
  } else {
    res.json(new ErrorModel('delete blog fail'))
  }
})

module.exports = router
