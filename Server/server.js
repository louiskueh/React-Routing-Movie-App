const express = require('express');
const cors = require ('cors')
const app = express();
const dogRoute = require('./dogRoute')
// /dogs goes to dogRoute
// app.use('/dogs',dogRoute)

// without ./ look at node modules
// ./ relative to current file
// const myModule = require ('./myModule')
let movieIds = []
// blank -> wildcard
app.use (cors());
app.use(express.json());
// let myArray = [1,2,3,4,5]
app.listen(5000, () => {
    console.log('Listening on port 5000');
})

app.get('/add/:id', (req, res) => {
    console.log(req.params.id);
    movieIds.push(req.params.id);
});

app.get('/all',(req,res) => {
    console.log(movieIds)
    res.send(movieIds)

});

// use for middleware
// next goes to the next middle ware
// app.use((req,re,next)=> {
//     console.log('use')
//     next();
//     //error next(err)
// })

// app.use((err,req,res,next) => {
//     res.status(500).send("it failed")
// })

// app.use(express.json())

// app.get('/', (req, res) => {
//     console.log('hello again');
//     res.send('hello again')
//     console.log(req.query)
//     // res.send(req.query)

// });

// app.get('/param/:myParam', 
// (req,res,next) => {
//     //specialised middleware
// },
// (req, res) => {
//     res.send(req.params.myParam)

// });



