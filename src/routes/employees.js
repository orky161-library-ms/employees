require("express-async-errors")
const express = require('express')
const employeesLogic = require("../controller/employees")
const {libraryAuth} = require("../config/index")
const {verifyPermission, decodeToken} = libraryAuth
const {LibraryRoles} = require("../../../library.io-libs/dist/roles");

const router = express.Router()

router.get("/",[decodeToken, verifyPermission(LibraryRoles.ADMIN)] ,(async (req, res) => {
    const employees = await employeesLogic.getEmployees()
    res.status(200).json({employees})
}))

router.get("/:id", [decodeToken, verifyPermission(LibraryRoles.ADMIN)], (async (req, res) => {
    const employee = await employeesLogic.getEmployee(req.params.id)
    res.status(200).json({employee})
}))

router.post("/login",(async (req, res) => {
    const token = await employeesLogic.login(req.body)
    res.status(200).json({token})
}))

router.put("/:id",[decodeToken, verifyPermission(LibraryRoles.ADMIN)],(async (req, res) => {
    await employeesLogic.updateEmployee(req.params.id, req.body)
    res.status(202).json({message: "success"})
}))

module.exports = router

