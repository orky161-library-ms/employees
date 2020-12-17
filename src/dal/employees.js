const {pool} = require('../config/index')
const {addEmployeeQuery,
    getEmployeeByIdQuery,
    updateEmployeeQuery,
    getEmployeesQuery,} = require("../query_builder/queries")

class employeesDal {

    async addEmployee({name}) {
        const employee = await pool.query(addEmployeeQuery,
            [name])
        return employee[0].insertId
    }

    async getEmployeeById(id) {
        const employee = await pool.query(getEmployeeByIdQuery,
            [id])
        return employee[0][0]
    }

    async updateEmployee(id, {name}) {
        await pool.query(updateEmployeeQuery,
            [name, id])
    }

    async getEmployees() {
        const employees = await pool.query(getEmployeesQuery)
        return employees[0]
    }
}

module.exports = employeesDal
