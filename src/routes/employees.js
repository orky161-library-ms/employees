require("express-async-errors")
const express = require('express')
const employeesLogic = require("../controller/employees")
const {permission_mw, auth_mw, equalId_mw} = require("../auth/auth")
const router = express.Router()

router.get("/",[auth_mw, permission_mw("ADMIN")] ,(async (req, res) => {
    const employees = await employeesLogic.getEmployees()
    res.status(200).json({employees})
}))

router.get("/:id", [auth_mw, permission_mw("ADMIN")], (async (req, res) => {
    const employee = await employeesLogic.getEmployee(req.params.id)
    res.status(200).json({employee})
}))

router.post("/login",(async (req, res) => {
    const token = await employeesLogic.login(req.body)
    res.status(200).json({token})
}))

router.put("/:id",[auth_mw, permission_mw("ADMIN")],(async (req, res) => {
    await employeesLogic.updateEmployee(req.params.id, req.body)
    res.status(202).json({message: "success"})
}))

module.exports = router

