const models=require(__dirname +'/../models/index');
const jwt=require('jsonwebtoken');
const refreshTokens=[];
module.exports={
    registerUser:async (req,res)=>{
        const {email,password}=req.body;
        const user= await models.User.findOne({where:{email:email}});
        if (user) {
            res.send({error:'User already exists'})
        }
        else {
            const result= await models.User.create({email:email,password:password});
            res.json(result);
        }
    },
    loginUser:async(req,res)=>{
        const {email,password}=req.body;
        let userData={};
        let refreshToken,accessToken;
        const user=await models.User.findOne({where:{email:email}}).then(async(user)=>{
            if (user) {
                if (await user.validPassword(password)) {
                    userData=user;
                     accessToken=jwt.sign({email},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1m'});
                     refreshToken=jwt.sign({email},process.env.REFRESH_TOKEN_SECRET);
                    const result=user.update({access_token:accessToken,refresh_token:refreshToken},{
                        where:{
                            email:email
                        }
                    })
                }
                else {
                    userData={'error':'Invalid Credentials'}
                }
            }
            else {
                userData={'error':'Invalid Credentials'}
            }
        });
        if(!userData.hasOwnProperty('error')) {
            refreshTokens.push(refreshToken)
            res.status(200).json({
                accessToken,
                refreshToken,
                userData
            });
        }
        else {
            res.send('Invalid user')
        }
    },
    logOutUser:async(req,res)=>{
        const authHeader=req.headers.authorization;
        if (authHeader) {
            const token=authHeader.split(' ')[1];
            
            jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,async(err,user)=>{
                if (err) {
                    res.send(err)
                }
                await models.User.update({access_token:null},{
                    where:{
                        access_token:token
                    }
                })
            })
            res.json({"message":"logout"})
        }
        else {
            res.sendStatus(401)
        }
    
    }
};