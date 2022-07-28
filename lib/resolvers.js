'use strict'

const connectDb = require('./db')
const { ObjectID } = require('mongodb')


module.exports = {
  Query: {
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
      let course = []
      try {
        db = await connectDb()
        course = await db.collection('courses').findOne({ _id: ObjectID(args.id)})
      } catch (error) {
        console.log(error)
      }
      return course
    },
  }
}
