const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    let Icookie = req.cookies.idevCook;
    console.log(Icookie)
    if(!Icookie){
        console.log('no token found'); 
        return res.status(401).json({
            message: 'Not authenticated'
        })      
    }

    jwt.verify(Icookie,'This_Is_my_SecretKey',(err, decodedToken)=>{
      
        if(err){
           return clearTokenAndNEXT();
          }

      //  console.log( decodedToken);
        if (decodedToken.exp <= Date.now() / 1000) {
            console.log('token expired')
            return clearTokenAndNEXT();
        }

        next();
    })
    
    function clearTokenAndNEXT(){
        res.clearCookie('idevCook');
        res.status(401).json({
            message: 'Not authenticated'
        })
    }

    
}