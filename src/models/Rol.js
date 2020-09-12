import {Schema,model} from 'mongoose'

const rolesSchema= new Schema({
    name:String,

},{
    versionKey:false
})

export default model('rol',rolesSchema)