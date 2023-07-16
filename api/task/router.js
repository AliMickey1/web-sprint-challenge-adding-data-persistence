// build your `/api/projects` router here
const express = require('express')
const router = express.Router()

const Task = require('./model')

router.post('/', (req, res, next) => {
    Task.insert(req.body)
    .then(task => {
        if(task.task_completed === 0) {
            task.task_completed = false
            res.status(201).json(task)
        } else {
            task.task_completed = true
            res.status(201).json(task)
        }
    })
})

router.get('/', (req, res, next) => {
    Task.getTasks()
    .then(task => {
        task.map(tasks => {
            if(tasks.task_completed === 0) {
                tasks.task_completed = false
            } else {
                tasks.task_completed = true
            }
     })
    res.status(200).json(task)
    })
    .catch(next)
})


module.exports = router