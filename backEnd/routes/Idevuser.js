const express = require('express');
const routr = express.Router();
const idevUser = require('../dbModels/IdevUser');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let user1 = "";

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

routr.post('/login', (req, res, next) => {
   idevUser.findOne({email: req.body.email})
   .then((user) => {
      if(!user){
          res.status(401).json({
              message: 'Auth failed: User not found'
          })
      }
      user1 = user;
     return bcrypt.compare(req.body.password, user.password)

   })
   .then((rslt) => {
        if(!rslt){
            res.status(401).json({
                message: 'Auth failed: password mismatch'
            })
        }

      const token =  jwt.sign({email: user1.email, uderId: user1._id},
                              'This_Is_my_SecretKey',
                              {expiresIn: 60000})

       res
       .cookie('idevCook',token, {expires: new Date(Date.now() + 90000), httpOnly: true})
       .status(200).json({
           message: 'user logged in'
       })                     
    })
   .catch((err) => {
    res.status(401).json({
        message: 'Auth failed: '+ err
    })
    })


})

routr.get('/logout', (req, res, next) => {
    let cook = req.cookies.idevCook;
    res.clearCookie('idevCook');
    res.status(200).json({
        message: 'User is sussefully Logged OUT!'
    })
})

module.exports = routr;