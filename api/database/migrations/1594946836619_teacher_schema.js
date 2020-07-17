'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TeacherSchema extends Schema {
  up () {
    this.create('teachers', (table) => {
      table.increments()
      table.string('ocid');
      table.string('lattes');
      table.timestamps();
    })
  }

  down () {
    this.drop('teachers');
  }
}

module.exports = TeacherSchema
