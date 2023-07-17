// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const Task = require('./model')
const { checkTask } = require('./taskMiddle')

router.get('/', async (req, res, next) => {
    const asset = await Task.getTasks()
    try{
        res.status(200).json(asset)
    }
    catch(error) {
        next(error)
    }
})

router.post('/', checkTask, async (req, res, next) => {
    const asset = await Task.insert(req.body)
    try{
        res.status(201).json(asset)
    }
    catch(error) {
        next(error)
    }
})


module.exports = router