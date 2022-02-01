const {getCust,custSignup,login}=require("../Controllers/controllers");
const  router = require('express').Router()


//router.post('/' , signupCust)

router.get("/", getCust);
router.post("/", custSignup);
router.post("/", login);


module.exports  = router