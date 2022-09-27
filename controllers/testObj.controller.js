import {pool as db} from '../database/dataBase.js'

class TestObjController {
  async createTestObj(req, res) {
    const { date_of, title, amount, distance } = req.body
    const newTestObj = await db.query(
      `INSERT INTO test_obj (date_of, title, amount, distance) values ($1, $2, $3, $4) RETURNING *`,
      [date_of, title, amount, distance]
    )

    console.log(date_of, title, amount, distance)
    res.json(newTestObj)
  }

  async updateTestObj(req, res) {}

  async deleteTestObj(req, res) {}
}

export const testObjController = new TestObjController()
