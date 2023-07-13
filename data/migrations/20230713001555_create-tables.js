/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    // project table
  return knex.schema.createTable('project', tbl => {
    tbl.increments('project_id')
    tbl.string('project_name').notNullable()
    tbl.string('project_description')
    tbl.boolean('project_completed')
  })

//   resource table
  .createTable('resource', tbl => {
    tbl.increments('resource_id')
    tbl.string('resource_name').notNullable().unique()
    tbl.string('resource_description')
  })

//   task table
  .createTable('task', tbl => {
    tbl.increments('task_id')
    tbl.string('task_description').notNullable()
    tbl.string('task_notes')
    tbl.boolean('task_completed')
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
exports.down = function(knex) {
  
};
