/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    // project table
  return knex.schema
  .createTable('projects', tbl => {
    tbl.increments('project_id')
    tbl.string('project_name', 200).notNullable()
    tbl.string('project_description', 500)
    tbl.boolean('project_completed').defaultTo(0)
  })

//   resource table
  .createTable('resources', tbl => {
    tbl.increments('resource_id')
    tbl.string('resource_name').notNullable().unique()
    tbl.string('resource_description')
  })

//   task table
  .createTable('tasks', tbl => {
    tbl.increments('task_id')
    tbl.string('task_description').notNullable()
    tbl.string('task_notes')
    tbl.boolean('task_completed').defaultTo(0)
    tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
  })

//   project resources table
  .createTable('project_resources', tbl => {
    tbl.increments('project_resource_id')
    tbl.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('resource_id')
      .inTable('resources')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('project_id')
      .inTable('projects')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
