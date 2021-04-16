const express=require('express');
const jwt=require('jsonwebtoken');
const app=express();
const test=require('./routes/test');
const models=require('./models/index');
const {registerUser,loginUser,logOutUser}=require('./routes/users');
app.use(test);
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
const router= express.Router();

app.post('/auth/register',registerUser);
app.post('/auth/logout',logOutUser)
app.post('/auth/login',loginUser);


module.exports=app;
if (require.main === module) {
    const port = process.env.PORT || 3001
    app.listen(port, () => {
      console.log(`API server listening on port ${port}`)
    })
}