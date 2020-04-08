const db = require("../../config/db")
const { age, date } = require('../../lib/utils')


module.exports = {
  all() {
    db.query(`SELECT * FROM instructors`, function(err,results) {
      if(err) throw `Database Error. ${err}`
    })
  },
  create(data, callback) {
    const query = `
    INSERT INTO instructors (
      name,
      avatar_url,
      gender,
      services,
      birth,
      created_at
    ) VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING id `

    const values = [
      data.name,
      data.avatar_url,
      data.gender,
      data.services,
      date(data.birth).iso,
      date(Date.now()).iso
    ]

    db.query(query, values, function(err, results) {
      if(err) throw `Database Error. ${err}`

      callback(results.row[0])
    })
  },
  find(id, callback) {
    db.query(`SELECT * FROM instructors WHERE id=$1`, [id], function(err, results) {
      if(err) throw `Database Error. ${err}`

      callback(results.rows[0])
    })
  }
}