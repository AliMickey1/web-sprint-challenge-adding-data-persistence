// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks() {

        return db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .select('t.task_id',
        't.task_description',
        't.task_notes',
        't.task_completed',
        'p.project_name',
        'p.project_description')
        .groupBy('t.task_id')
        .orderBy('t.task_id')
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


module.exports = {
    getTasks,
    insert,
}