// build your `/api/projects` router here
const express = require('express')
const router = express.Router()

const Resource = require('./model')

router.post('/', (req, res, next) => {
    Resource.getResources()
    .then(resour => {
        res.status(200).json(resour)
    })
    .catch(next)
})

router.get('/', (req, res, next) => {
    Resource.createResource(req.body)
    .then(resour => {
        res.status(201).json(resour)
    })
    .catch(next)
})


module.exports = router