'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContentSchema extends Schema {
  up () {
    this.create('contents', (table) => {
      table.increments();
      table.integer('user_id')
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

      table.string('title').notNullable();
      table.string('description').notNullable();

      table.enu('type', ['activity', 'content', 'archive', 'course']).notNullable();
      table.timestamps();
    })
  }

  down () {
    this.drop('contents');
  }
}

module.exports = ContentSchema
