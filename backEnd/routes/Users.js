const express = require('express');
const MongoUser = require('../dbModels/User');

const authMiddleware = require('../middlewares/check-auth')

const routr = express.Router();

routr.post('', authMiddleware,(req, res, next) => {
    //  addedUser = req.body;
     addedUser = new MongoUser({
      userName: req.body.userName,
      role: req.body.role,
      mailID: req.body.mailID,
      aplicationName: req.body.aplicationName
     })
     
    // console.log(addedUser);
     addedUser.save(()=> {
         console.log('saved succesfully');
     });
    //  users.push(addedUser);
      res.status(200).json({'Message':'User added'});
  })
  
routr.get('', authMiddleware,(req, res, next) => {
     MongoUser.find((err, response)=> {
        if(err){
            console.log('sorry, some error during fetching users from mongo(app.js)');
            throw Error('Some server err ocuured on app.js');
        }
      //  console.log(response);
        res.status(200).json(response);
     })
     
  })

module.exports = routr;