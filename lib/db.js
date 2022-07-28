'use strict'

const { MongoClient } = require('mongodb')
const {
  DB_USER,
  DB_PASSWD,
  DB_HOST,
  DB_CONFIG,
  DB_NAME
} = process.env

const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWD}@${DB_HOST}/${DB_NAME}/${DB_CONFIG}`
let connection

async function connectDB() {
  if (connection) return connection
  let client
  try {
    client = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true
    })
    connection = client.db(DB_NAME)
  } catch (error) {
    console.error('Coluld not connect to db', mongoUrl, error)
    process.exit(1)
  }
  return connection
}

module.exports = connectDB