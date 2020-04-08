const Instructor = require("../models/Instructor")
const { date } = require('../lib/utils')

module.exports = {
  index(req, res) {
    Instructor.all(function(instructors) {
      return res.render("instructors/index", { instructors })
    })
  },

  create(req, res) {
    Instructor.create(req.body, function(instructors) {
      return res.redirect(`/instructors/${Instructor.id}`)
    })
  },

  post(req, res) {
    const keys = Object.keys(req.body)
  
    for(key of keys) {
      if(req.body[key] === "")
        return res.send('Please, fill all the form.')
    }    
  },

  show(req, res) {
    Instructor.find(req.params.id, function(instructors) {
      if(!Instructor) return res.send("Instructor not found.")

      Instructor.age = age(Instructor.birth)
      Instructor.services = Instructor.services.split(",")
      Instructor.created_at = date(instructor.created_at).format

      return res.render("instructors/show", {instructor})

    })
  },

  edit(req, res) {
    return
  },

  put(req, res) {
    const keys = Object.keys(req.body)
  
    for(key of keys) {
      if(req.body[key] === "")
        return res.send('Please, fill all the form.')
    }

    return
  },

  delete(req, res) {
    return
  }
}

