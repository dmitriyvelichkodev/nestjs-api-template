module.exports = {
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWROD,
  "database": process.env.DB_NAME,
  "entities": ["src/**/**.entity{.ts,.js}"],
  "synchronize": true
}
