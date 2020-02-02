const { ErrorModel } = require('../model/resModel')

model.exports = (req, res, next) => {
  if (req.session.username) {
    next()
    return
  }
  res.json(new ErrorModel('login fail'))
}
