const employeeDal = require('../dal/employees')
const axios = require("axios")
const {sendEmail} = require("../queue/rabbit/producers/publish")

async function addEmployee({name, email, employee}) {
    await employeeDal.addEmployee({name, authId: employee})
    sendEmail(email, "Hello from Library.io, Thank you for sign-up")
}

function getEmployee(id) {
    return employeeDal.getEmployeeById(id)
}

async function login({email, password}) {
    const employee = await axios.post(`http://${process.env.AUTH_SERVICE}/api/auth/login`, {
        email, password
    })
    return employee.data.token
}

function updateEmployee(id, employee) {
    return employeeDal.updateEmployee(id, employee)
}

function getEmployees() {
    return employeeDal.getEmployees()
}

module.exports = {
    addEmployee,
    getEmployee,
    login,
    updateEmployee,
    getEmployees,
}
