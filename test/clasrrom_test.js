const expect = require('chai').expect
const Classroom = require('../src/classroom')

describe('Classroom', () => {
  describe('new classroom', () => {
    it('has the number of students provided as an argument', () => {
      const classroom = new Classroom(17)

      const numberOfStudents = classroom.numberOfStudents

      expect(numberOfStudents).to.equal(17)
    })
  })

  describe('addStudents', () => {
    it('increases the numberOfStudents when given a positive integer', () => {
      const classroom = new Classroom(10)

      classroom.addStudents(10)

      expect(classroom.numberOfStudents).to.equal(20)
    })

    it('does nothing to the numberOfStudents when given a negative integer', () => {
      const classroom = new Classroom(10)

      classroom.addStudents(-10)

      expect(classroom.numberOfStudents).to.equal(10)
    })
  })

  describe('removeStudents', () => {
    it('decreases the numberOfStudents when given a positive integer', () => {
      const classroom = new Classroom(10)

      classroom.removeStudents(10)

      expect(classroom.numberOfStudents).to.equal(0)
    })

    it('does nothing to the numberOfStudents when given a negative integer', () => {
      const classroom = new Classroom(10)

      classroom.removeStudents(-10)

      expect(classroom.numberOfStudents).to.equal(10)
    })
  })
})
