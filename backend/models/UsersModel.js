const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false
    }
},{timestamps:true}
)

userSchema.methods.matchPassword = async function(enterdPassword){
    return await bcrypt.compare(enterdPassword, this.password)
}

const User = mongoose.model('User', userSchema)
module.exports=User;