const express = require('express');
const routr = express.Router();
const idevUser = require('../dbModels/IdevUser');

const bcrypt = require('bcrypt');


routr.post('/signup',(req, res, next) => {
   bcrypt.hash(req.body.password, 10)
   .then((encryptedPass) => {

        addedIdevUser = new idevUser({
        email: req.body.email,
        password: encryptedPass
        })
 
        addedIdevUser.save()
        .then((reslt) => {
           res.status(200).json({
               message: 'idev User added succesfully',
               result: reslt
           })
        })
   })
   .catch((err) => {
       res.status(500).json({
           error: err
       })
   })

})

module.exports = routr;