const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const userSchema=mongoose.Schema({
    email:String,
    password:String,

    // email:{
    //     type:String,
    //     required:true,
    //     unique:true
    // }
})
userSchema.pre('save',(next)=>{
    const user=this;
    bcrypt.hash(user.password,5,function(error,hash){

        if(!error){
            user.password=hash;
            next()
        }
    })
})
module.exports=mongoose.model('Users',userSchema)