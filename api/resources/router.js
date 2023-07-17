// build your `/api/projects` router here
const express = require('express')
const router = express.Router()

const Resource = require('./model')

router.get('/', (req, res, next) => {
    Resource.getResources()
    .then(resources => {
        res.status(201).json(resources)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Resource.createResource(req.body)
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(next)
})


module.exports = router