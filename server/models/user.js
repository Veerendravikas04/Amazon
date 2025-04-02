const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        // lowercase:true,
        validate:{
            validator:(value)=>{
                const re=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                return value.match(re);
            },
            message:'Invalid Email',

        }
    },
    password:{
        type:String,
        required:true,
        validate:{
            validator:(value)=>{
                return value.length>=6;
            },
            message:'Password must be at least 6 characters long',
        }
    },
    address:{
        type:String,
        default:'',
    },
    type:{
        type:String,
        default:'user',
    },
});

const User=mongoose.model('User',userSchema);
module.exports=User;