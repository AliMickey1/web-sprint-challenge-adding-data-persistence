// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProject() {
    const Project = await db('projects')
    const result = Project.map(Projects => {
        return {
            ...Projects,
            project_completed: Projects.project_completed ? true : false
        }
    })
    return (result)
}

async function insert(project) {
    const [project_id] = await db('projects').insert(project)
    return db('projects').where({project_id}).first()
}

async function getById(id) {
    try {
        const row = await db('projects')
        .where('project_id', id)
        return (row)
    } catch(error) {
        return
    }
}


module.exports = {
    getProject,
    insert,
    getById
}