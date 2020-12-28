const {pool} = require('../config/index')
const {
    addEmployeeQuery,
    getEmployeeByIdQuery,
    updateEmployeeQuery,
    getEmployeesQuery,
    checkConnectionQuery
} = require("./query_builder/queries")


async function addEmployee({name, authId}) {
    const employee = await pool.query(addEmployeeQuery, [name, authId])
    return employee[0].insertId
}

async function getEmployeeById(id) {
    const employee = await pool.query(getEmployeeByIdQuery,
        [id])
    return employee[0][0]
}

async function updateEmployee(id, {name}) {
    await pool.query(updateEmployeeQuery,
        [name, id])
}

async function getEmployees() {
    const employees = await pool.query(getEmployeesQuery)
    return employees[0]
}

function checkConnection() {
    return pool.query(checkConnectionQuery)
}

module.exports = {
    addEmployee,
    getEmployeeById,
    updateEmployee,
    getEmployees,
    checkConnection
}
