'use strict'

const connectDb = require('./db')

module.exports = {
  createCourse: async (root, { input }) => {
    const defaults = {
      teacher: '',
      topic: ''
    }

    const newCourses = Object.assign(defaults, input)
    let db 
    let course
    try {
      db = await connectDb()
      course = await db.collection('courses').insertOne(newCourses)
      newCourses._id = course.insertedId
    } catch (error) {
      console.log(error)
    }
    return newCourses
  }
}