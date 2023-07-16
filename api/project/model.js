// build your `Project` model here
const db = require('../../data/dbConfig')

function getProject() {
    return db('project')
}

async function insert(project) {
    const [project_id] = await db('project').insert(project)
    return db('project').where({project_id}).first()
}


module.exports = {
    getProject,
    insert
}