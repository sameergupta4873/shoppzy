const User = require('../models/UsersModel');
const asyncHandler = require('express-async-handler');

const authUser = asyncHandler(async(req,res)=>{
    const { email,password } = req.body
    
    const user = await User.findOne({email})
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: null
        })
    }else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

module.exports = {authUser}