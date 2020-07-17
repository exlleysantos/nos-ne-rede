'use strict'

const Teacher = use("App/Models/TeacherController");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with teachers
 */
class TeacherController {
  /**
   * Show a list of all teachers.
   * GET teachers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    return await Teacher.all();
  }

  /**
   * Create/save a new teacher.
   * POST teachers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only(["ocid", "lattes"]);
      
    return await Teacher.create(data);
  }

  /**
   * Display a single teacher.
   * GET teachers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    return  await Teacher.findOrFail(params.id);
  }

  /**
   * Delete a teacher with id.
   * DELETE teachers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const teacher = await Teacher.findOrFail(params.id);

    await teacher.delete();
  }
}

module.exports = TeacherController
