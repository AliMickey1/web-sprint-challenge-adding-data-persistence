// build your `/api/projects` router here
const express = require('express')
const router = express.Router()

const Project = require('./model')

router.post('/', (req, res, next) => {
    Project.insert(req.body) 
    .then(proj => {
        if(proj.project_completed === 0) {
            proj.project_completed = false
            res.status(201).json(proj)
        } else {
            proj.project_completed = true
            res.status(201).json(proj)
        }
    })
    .catch(next)
})

router.get('/', async (req, res, next) => {
    await Project.getProject()
    .then(proj => {
        if(proj.project_completed === 0) {
            proj.project_completed = false
        } else {
            proj.project_completed = true
        }
    })
    .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        errorMessage: 'What happened now? Something is wrong...',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router