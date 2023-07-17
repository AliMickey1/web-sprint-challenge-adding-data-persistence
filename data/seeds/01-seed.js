/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('projects').del()
  await knex('projects').insert([
    { 
      project_name: 'New table',
      project_description: 'Create a test table',
      project_completed: true
    }, 
    {
      project_name: 'Additional table',
      project_description: 'Create a second table',
      project_completed: false
    }
  ]);
};
