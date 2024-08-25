const express = require('express');
const BlogPost =require('../models/blogpost');

const router =express.Router();

router.get('/',(req,res) =>{
        //fetch all the blogs from the db
        //send the blog as a response
        BlogPost.find()
        .then((result) =>{
            res.send(result);
        })
        .catch((err) =>{
            console.log(err);
            res.status(500).send({error:'An error occured while fatching the blogs'})
        });
});






