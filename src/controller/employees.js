const employeeDal = new (require('../dal/employees'))()
const axios = require("axios")

class employeesLogic{
    async addEmployee({name, email, password}) {
        await axios.post(`http://${process.env.AUTH_SERVICE}/api/auth/admin`,{
            email, password
        })
        return employeeDal.addEmployee({name, email})
    }

    deleteEmployee(id) {
        return employeeDal.deleteEmployee(id)
    }

    getEmployee(id) {
        return employeeDal.getEmployeeById(id)
    }
    async login({email, password}) {
        const employee = await axios.post(`http://${process.env.AUTH_SERVICE}/api/auth/login`,{
            email, password
        })
        return employee.data.token
    }

    updateEmployee(id, employee) {
        return employeeDal.updateEmployee(id, employee)
    }

    getEmployees() {
        return employeeDal.getEmployees()
    }
}

module.exports = employeesLogic
