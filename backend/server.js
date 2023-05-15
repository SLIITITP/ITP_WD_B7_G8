require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const inventoryRoutes = require('./routes/inventory')
const monthqtyRoutes = require('./routes/monthqty')
const pledgerRoutes = require('./routes/pledger')
const pricetrackRoutes = require('./routes/pricetrack')
const iusersRoutes = require('./routes/iusers')
const express = require('express')
require('dotenv').config()

const mongoose = require('mongoose')

const employeeRoutes = require('./routes/employee')
const employeeattendRoutes = require('./routes/employeeattend')
const employeesalaryRoutes = require('./routes/employeesalary')


//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/inventory', inventoryRoutes)
app.use('/api/monthqty', monthqtyRoutes)
app.use('/api/pledger', pledgerRoutes)
app.use('/api/pricetrack', pricetrackRoutes)
app.use('/api/iusers', iusersRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
