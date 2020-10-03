const db = require("../models")

module.exports={
    saveBook: function(req, res){
        db.Book
            .create(req.body)
            .then(dbModel=> res.json(dbModel))
            .catch(err=>res.status(422).json(err))
    }, 
    find: function(req, res){
        db.Book
            .find()
            .then(dbModel=>res.json(dbModel))
            .catch(err=>res.status(422).json(err))
    }, 
    remove: function(req, res){
        // console.log("params.id is: ",req.params.id)
        db.Book
            .findById(req.params.id)
            .then(dbModel=>dbModel.remove())
            .then(dbModel=>res.json(dbModel))
            .catch(err=> res.status(422).json(err))

    }
}