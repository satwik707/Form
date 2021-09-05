const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const UserModel = require("./model/Users");
const app = express();

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'http://localhost:3001',
    credentials: true,
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// const { MongoClient } = require('mongodb');
// const mongoose = require('mongoose')
// const uri = "mongodb+srv://satwik707:satwik707@cluster0.vayqe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
  
//   client.close();
// });

// mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: false}).then (()=>
// {
//     console.log("connection success")
// }).catch(err=> console.log(err))

const data=[]

app.get('/', function(req, res) {
    console.log('Inside Home Login');
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    console.log('data : ', JSON.stringify(data));
    res.end(JSON.stringify(data));
  });

  // app.post("/create", async (request, response) => {
  //   const User = new UserModel(request.body);
  
  //   try {
  //     await User.save();
  //     response.send(User);
  //   } catch (error) {
  //     response.status(500).send(error);
  //   }
  // });

app.post('/create', function(req, res) {
    console.log(req.body)
    if(req.body==[])
        {
            return
        }
    const newdata={
        Email : req.body.Email,
        Password : req.body.Password
    }
    data.push(newdata)
    
   console.log(data)
  })





//start your server on port 3000
app.listen(3000, () => {
  console.log('Server Listening on port 3000');
});
