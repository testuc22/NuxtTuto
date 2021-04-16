const {Router}=require('express');
const jwt=require('jsonwebtoken');
const router= Router();
const posts=[
    {
        id:1,
        title:'post one'
    },
    {
        id:2,
        title:'post two'
    }
];

const authenticateUser=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if (authHeader) {
        const token=authHeader.split(' ')[1];
        
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
            if (err) {
                res.send(err)
            }
            req.user=user;
            next();
        })
    }
    else {
        res.sendStatus(401)
    }
}
router.use('/posts',authenticateUser,(req,res)=>{
    
    res.status(200).send(posts);
})
router.use('/auth/user',authenticateUser,async(req,res)=>{
    res.send(req.user)
})
module.exports=router;