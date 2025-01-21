const fruits = require("../fruits.json")

//build a class
//constructor to build instances of the fruit to return to the controller
//method showAll will access fruits json and return instances to controller
//method show will create an instance of a fruit using given name and return to controller 

class Fruit{
    constructor(fruit){
        this.genus = fruit.genus;
        this.name = fruit.name;
        this.id = fruit.id;
        this.family = fruit.family;
        this.order = fruit.order;
        this.nutritions = fruit.nutritions;
    }
    static show(name){
        
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() === name);
        if (fruit){
            return new Fruit(fruit)
        }else{
            throw Error("the fruit dosent exist")
            
        }

    }

    static showAll(){
        return fruits.map(fruit => new Fruit(fruit))
    }

    static create = (data) => {
        const newFruit = data;
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == data.name.toLowerCase());
        if (fruit) {
            throw "The fruit already exists.";
        } else {
            newFruit["id"] = fruits.length + 1;
            fruits.push(newFruit);
      
            return new Fruit(newFruit)
        }
    }

    update(data){
        const updatedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
        if(updatedFruit){
            updatedFruit.name = data.name
            updatedFruit.family = data.family
            return new Fruit(updatedFruit)
        } else{
            throw Error("Fruit not found")
        }
    }

    destroy(){
        const deletedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
        if(deletedFruit){
            const index = fruits.indexOf(deletedFruit)
            fruits.splice(index, 1)

        }else{
            throw Error("Fruit not found")
        }
    }
}

// const fruit = fruits.filter(fruit => fruit.name.toLowerCase() === name)
//     if(fruit.length === 1){
//         //console.log(fruit[0].name);
//         res.status(200).send(fruit)
//     }else{
//         res.status(400).send("the fruit is not contained in this api")
//     }

module.exports = Fruit