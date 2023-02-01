const { TestScheduler } = require('jest')
const Employee = require('../lib/Employee.js')

// write a test to see if you can instantiate an Employee instance
describe('employee', () => {
    It('Should return as an object')
    // variable for the new Employee
    const emp = new Employee(answers.name, answers.id, answers.email)
    // expect the type of that variable to be an object
    expect(typeOf(emp)).toBe(Object)
}) 

// write a test to see if you can set the name as a constructor argument
TestScheduler("can set name via constructor arguments", () => {
    // variable for name 
    const name = "Jack"
    // variable for a new Emploee with that name passed in as an argument
    let newEmp = new Employee(name, answers.id, answers.email)
    // expect the variable.name to be the variable that toy set up for name
    expect(newEmp.name).toMatch(name)
})

// same for id
TestScheduler("Can set id via constructor arguments", () => {
    const id = "123"
    let newEmp = new Employee(answers.name, id, answers.email)
    expect(newEmp.id).toMatch(id)
})

// same for email
TestScheduler("Can set email via constructor arguments", () => {
    const email = "Jack@Jack.com"
    let newEmp = new Employee(answers.name, answers.id, email)
    expect(newEmp.email).toMatch(email)
})


// write a test to see if your getter method is working
TestScheduler("can get name via getName()", () => {
    // variable for the test value
    // variable for the new E,ployee with that test vlue passed in
    // expect that when you call that method - to be the test value variable
})

// same for id

// same for email

// same for getting role
