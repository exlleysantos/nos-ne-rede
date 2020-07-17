'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('user', (table) => {
      table.increments();
      table.string('username').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.string('cpf').notNullable();
      table.string('avatar').notNullable();
      table.enu('type', ['adm', 'teacher']).notNullable().defaultTo('teacher');
      table.timestamps();
    })
  }

  down () {
    this.drop('user')
  }
}

module.exports = UserSchema
