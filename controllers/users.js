let users = []

const { request } = require('express');
const { v4: uuidv4 } = require('uuid');

exports.getUsers = (req,res,next) => {
    res.send(users)
}

exports.postUsers = (req,res,next) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`Username ${user.firstName} added to database`);
}

exports.getUserById = (req,res,next) => {
    const { id } = req.params;
    const findUsers = users.find((user) => user.id === id);
    res.send(findUsers);
}

exports.deleteUser = (req,res,next) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with id ${id} deleted from database`);
}

exports.updateUser = (req,res,next) => {
    const { id } = req.params;
    const { firstName, lastName, age} = req.body;

    const user = users.find((user) => user.id === id);

    if(firstName, lastName, age) {
        user.firstName = firstName;
        user.lastName = lastName;
        user.age = age;
    }
    res.send(`User ${user.firstName} updated data`);
}