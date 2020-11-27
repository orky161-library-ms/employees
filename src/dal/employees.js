const pool = require('../db')

class employeesDal {

    async addEmployee({name, email}) {
        const employee = await pool.query('INSERT INTO employees (name, email) VALUES (?,?)',
            [name, email])
        return employee[0].insertId
    }

    async getEmployee(id) {
        const employee = await pool.query('SELECT * FROM employees WHERE id = (?)',
            [id])
        return employee[0][0]
    }

    async updateEmployee(id, {name}) {
        await pool.query('UPDATE employees SET ' +
            'name = (?)' +
            'WHERE id = (?)',
            [name, id])
    }

    async getEmployees() {
        const employees = await pool.query('SELECT * FROM employees')
        return employees[0]
    }
}

module.exports = employeesDal
