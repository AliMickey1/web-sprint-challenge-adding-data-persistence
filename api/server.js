// build your server here and require it from index.js
const express = require('express')
const server = express()

const projectRouter = require('./projects/router')
const resourceRouter = require('./resources/router')
const taskRouter = require('./tasks/router')

server.use(express.json())
server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)

server.use('*', (req, res) => {
    res.json({api: "API in use"})
})

module.exports = server;