const db = require('./model')
const Project = require('../projects/model')

async function checkTask(req, res, next) {
    try {
        const { task_description, project_id } = req.body
        const project = await Project.getById(project_id)
        if(project.length === 0 || !project_id) {
            next({ status: 400, message: 'Project ID is not valid' })
        } else if (!task_description) {
            next({ status: 400, message: 'Task description is missing' })
        } else {
            next()
        } 
    } catch(error) {
        next(error)
    }
}


module.exports = {
    checkTask,
 }