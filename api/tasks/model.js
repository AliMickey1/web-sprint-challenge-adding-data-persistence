// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks() {
    // return db('tasks as t')
    //     .select('t.*', 'p.project_name', 'p.project_description')
    //     .join('projects as p', 'p.project_id', 't.project_id')

    const asset = await db('tasks as t')
        .leftJoin('project as p', 't.project_id', 'p.project_id')
        .select('t.task_id',
        't.task_description',
        't.task_notes',
        't.task_completed',
        'p.project_name',
        'p.project_description')
    const result = asset.map(assets => {
        return {
            task_completed: assets.task_completed ? true : false
        }
    })
    return result
}

async function insert(task) {
    const [task_id] = await db('tasks').insert(task)
   const newOne = await db('tasks').where('task_id', task_id)
   const result = newOne.map(assets => {
    return {
        ...assets,
        task_completed: assets.task_completed ? true : false
    }
   })
    return result[0]
}

async function getById(id) {
    try {
        const row = await db('tasks')
        .where('project_id', id)
        return (row)
    } catch(error) {
        return
    }
}


module.exports = {
    getTasks,
    insert,
    getById
}