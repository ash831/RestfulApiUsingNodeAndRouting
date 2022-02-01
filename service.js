const db = require("../Config/database");
module.exports = {


    getCust: (callBack )=> {
    db.query(
      "select * from cust",
      
      (error, results) => {
        if (error) {
          console.log(error);
        }
        return callBack(null, results);
      }
    );
  },
  signup: (data, callBack) => {
   db.query(
      "insert into cust (first_name, last_name, email,password, phone )values( ?,?,?,?,?)",
      [
        data.first_name,
        data.last_name,
        data.email,
        data.password,
        data.phone
      ],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

// custLogin:(email ,callBack) =>{
//   db.query("select  * from cust where email=? "),
//   [email],(error, results) => {
//     if (error) {
//        return callBack(error);
//     }
//     return callBack(null, results);
//   }

// } 
custLogin: (email, callBack) => {
  db.query(
    `select * from cust where email = ?`,
    [email],
    (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results[0]);
    }
  );
}
}