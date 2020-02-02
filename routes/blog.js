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

router.get('/list', function(req, res, next) {
  //req.path is getting from app.js
  let author = req.query.author || ''
  const keyword = req.query.keyword || ''

  // if (req.query.isadmin) {
  //   //admin
  //   const loginCheckResult = loginCheck(req)
  //   if (loginCheckResult) {
  //     //not login
  //     return loginCheckResult
  //   }
  //   //search your own blog
  //   author = req.session.username
  // }
  // return new SuccessModel(listData)
  const result = getList(author, keyword) //result is a promise
  return result.then(listData => {
    res.json(new SuccessModel(listData))
  })
})

router.get('/detail', function(req, res, next) {
  res.json({
    error: 0,
    data: 'oK'
  })
})

module.exports = router
