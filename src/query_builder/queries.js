
const checkConnectionQuery = "DO 1"

const addEmployeeQuery = 'INSERT INTO employees (name) VALUES (?)'
const getEmployeeByIdQuery = 'SELECT * FROM employees WHERE id = (?)'
const updateEmployeeQuery = 'UPDATE employees SET ' +
                            'name = (?)' +
                            'WHERE id = (?)'
const getEmployeesQuery = 'SELECT * FROM employees'


module.exports ={
    checkConnectionQuery,
    addEmployeeQuery,
    getEmployeeByIdQuery,
    updateEmployeeQuery,
    getEmployeesQuery,
}
