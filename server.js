require('dotenv').config("./env");

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const employeeRoutes = require("./src/routes/employees")

const app = express()
const port = 30004

app.use(cors())
app.use(bodyParser.json())
app.use("/api/employee", employeeRoutes)

app.get('/ping', function (req, res) {
    res.status(200).json({msg: "ping by employee"})
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});

