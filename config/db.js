const env = process.env.NODE_ENV

let MYSQL_CONF
let REDIS_CONF

if (env === 'dev') {
  //mysql
  MYSQL_CONF = {
    host: 'localhost',
    user: 'david',
    password: 'P@ssw0rd',
    port: '3306',
    database: 'myblog'
  }

  //redis
  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
  }
}

// if (env === 'production') {
//   MYSQL_CONF = {
//     host: 'localhost',
//     user: 'david',
//     password: 'P@ssw0rd',
//     port: '3306',
//     database: 'myblog'
//   }
// }

module.exports = {
  MYSQL_CONF,
  REDIS_CONF
}
