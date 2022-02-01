//const { create } = require("domain");
const { getCust, signup, custLogin } = require("../Services/service");
 const {compareSync}=require("bcrypt")

module.exports = {
  getCust: (req, res) => {
    getCust((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },
  custSignup: (req, res) => {
    const body = req.body;
    signup(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.send("Something went wrong")
      }
      return res.send("Signup customer mail is " + body.email)
    });
  },

  // login: (req, res) => {
  //   custLogin(req.body.email, (err, results) => {
  //     if (err) {
  //       console.log(err);
  //       return res.send("Invalid email and password")
  //     }
  //     if(!results){
  //       return res.send("Invalid email and password")
  //     }
  //     // const result=compareSync(req.body.password,results.password)
  //     // if(result){
  //     //   return res.send("Login Successfully")
  //     // }
  //     // else{
  //     //   return res.send("Invalid email and password")

  //     // }
  //   });

    
  //}
  login: (req, res) => {
    const body = req.body;
    custLogin(body.email, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          data: "Invalid email or password"
        });
      }
      const result = compareSync(body.password, results.password);
      if (result) {
       
        return res.json({
          success: 1,
          message: "login successfully",
          token: jsontoken
        });
      } else {
        return res.json({
          success: 0,
          data: "Invalid email or password"
        });
      }
    });
  }
}