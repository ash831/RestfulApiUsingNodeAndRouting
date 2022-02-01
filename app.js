const express = require ("express");

const app = express();
const useRouter=require("./Routes/customer")
app.use(express.json());

app.listen(3001,()=>{
    console.log("server is running on port 3001");
})
app.use("/getCust",useRouter)
app.use("/cust/signup",useRouter);
app.use("/cust/login",useRouter);
