const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogpost = new Schema({
    title:{
        type:String,
        required:true
    },
    summary:{
        type:String,
        required:true
    },
    content:{
        typr:String,
        required:true
    },
    author:{
        type:String,
        required:true
    }
},{timestamps:true});
const blogpostCollectionName ='blogposts';
const BlogPost =mongoose.model('BlogPost',blogpost,blogpostCollectionName);

module.exports