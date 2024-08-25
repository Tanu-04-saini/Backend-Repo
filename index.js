const express = require ('express');
const morgan = require('morgan');
const mongoose =require('mongoose');
const blogPostRoutes = require ('../router/blogRoutes');

//npm install cors
const cors = require ('cors');


const username="tanusaini";
const passward ="saini2003";
const db_name ="merndb";
const dbURI=`mongodb+srv://${username}:${passward}@merncluster.j8vzz.mongodb.net/${db_name}?retryWrites=true&w=majority&appName=mernCluster`;
const port = 3000;

//express app
const app = express(); 
//middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json);
app.use(cors);

mongoose.connect(dbURI)
.then((result)=>{
    console.log("connected to DB");
    app.listen(port,() =>{
        console.log(`Server is running on port ${port}`);
    });
})
.catch((err) =>{
    console.log('Failed to connect to db',err);
    process.exit(1); //Exit the process with a failure code
})
// mongoose.connection.close(dbURI);

app.get('/',(req,res) =>{
    res.send({message:'Blogpost API'});
});

app.use('/blogs',blogPostRoutes);

app.use((req,res) =>{
    res.status(404).send({error:'404:page not found'});
});