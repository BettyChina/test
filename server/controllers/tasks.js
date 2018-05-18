const mongoose = require('mongoose');

const Task = mongoose.model('Task');

module.exports = {
    all: function(req, res){
        Task.find({})
        .then(
            data => res.json({message: "Success", tasks: data})
        )
        .catch(
            error => res.json({message: "Error", error: error})
        )
    },
    getOne: function(req, res){
        Task.findOne({_id: req.params.id})
        .then(
            data => res.json({message: "Success", task: data})
        )
        .catch(
            error => res.json({message: "Error", error: error})
        )
    },
    create: function(req, res){
        Task.create(req.body)
        .then(
            data => res.json({message: "Success", task: data})
        )
        .catch(
            error => res.json({message: "Error", error: error})
        )
    },
    update: function(req, res){
        Task.update({_id: req.body._id}, req.body)
        .then(
            data => res.json({message: "Success", task: data})
        )
        .catch(
            error => res.json({message: "Error", error: error})
        )
    },
    removeTask: function(req, res){
        Task.remove({_id: req.params.id})
        .then(
            data => res.json({message: "Success", task: data})
        )
        .catch(
            error => res.json({message: "Error", error: error})
        )
    }

}
