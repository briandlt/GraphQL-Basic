'use strict'

const connectDb = require('./db')
const { ObjectID } = require('mongodb')

module.exports = {
  getCourses: async () => {
    let db
    let courses = []
    try {
      db = await connectDb()
      courses = await db.collection('courses').find().toArray()
    } catch (error) {
      console.log(error)
    }
    return courses
  },
  getCourse: async (root, args) => {
    let db
    let student = []
    try {
      db = await connectDb()
      student = await db.collection('students').findOne({ _id: ObjectID(args.id) })
    } catch (error) {
      console.log(error)
    }
    return student
  },
  getStudents: async () => {
    let db
    let students = []
    try {
      db = await connectDb()
      students = await db.collection('students').find().toArray()
    } catch (error) {
      console.log(error)
    }
    return students
  },
  getStudent: async (root, args) => {
    let db
    let student = []
    try {
      db = await connectDb()
      student = await db.collection('students').findOne({ _id: ObjectID(args.id) })
    } catch (error) {
      console.log(error)
    }
    return student
  },
}