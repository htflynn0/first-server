const Fruit = require("../models/Fruit.js")

const index = async (req, res) => {
    try {
        const fruits = await Fruit.showAll()
        res.status(200).send(fruits)
    }catch(err){
        res.status(500).send({error: "server Error"})
    }
    
  }

const show = async (req, res) => {
    const name = req.params.name.toLowerCase()
    try {
        const fruit = await Fruit.show(name)
        res.status(200).send(fruit)
    }catch (err){
        res.status(404).send({error: err.message})
    }

}

const create = async (req, res) => {
    try{
        const newFruit = await Fruit.create(req.body)
        res.status(201).send(newFruit)
    }catch (err) {
        res.status(409).send({error: err.message})
    }
}

const update = async(req, res) =>{
    const name = req.params.name.toLowerCase()
    try{
        const fruit = await Fruit.show(name)
        const result = await fruit.update(req.body)
        res.status(200).send(result)
    }catch (err){
        res.status(404).send({error: err.message})
    }
}

const destroy = async (req, res) => {
    const name = req.params.name.toLowerCase()
    try{
        const fruit = await Fruit.show(name)
        const result = await fruit.destroy()
        res.sendStatus(204)
    }catch(err){
        res.status(404).send({error: err.message})
    }
}

module.exports = {
    index, show, create, update, destroy
}