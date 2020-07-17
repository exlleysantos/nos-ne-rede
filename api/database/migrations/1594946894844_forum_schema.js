'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ForumSchema extends Schema {
  up () {
    this.create('forums', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('forums')
  }
}

module.exports = ForumSchema
