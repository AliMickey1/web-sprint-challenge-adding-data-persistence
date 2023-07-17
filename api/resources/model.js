// build your `Resource` model here
const db = require('../../data/dbConfig')

async function getResources() {
    const Resources = await db('resources')
    return (Resources)
}

async function createResource(resource) {
    const [resource_id] = await db('resources').insert(resource)
    const newOne = await db('resources').where('resource_id', resource_id)
    return newOne[0]
}

async function getResourceByName(resource) {
    const Resource = await db('resource')
        .where('resource_name', resource)
    return(Resource)
}



module.exports = {
    getResources,
    createResource,
    getResourceByName
}