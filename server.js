require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000
const methodOverride = require('method-override')
const Logs = require("./models/logs")
const bodyParser = require('body-parser')

//middleware
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))

// Needed to use req.body
app.use(express.urlencoded({ extended: false }))

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB");
})
//Routes

// INDEX
app.get("/", (req, res) => {
    //find all logs
    Logs.find({}, (error, allLogs)=>{
      res.render('Index', {
        Logs: allLogs
      })
    }) 
  });

// NEW
app.get("/new", (req, res) => {
    res.render('New')
});

// POST
app.post('/logs', (req, res) => {
    Logs.create(req.body, (error, createdLogs) => {
        res.redirect("/");
    });
})

// SHOW 
app.get( '/logs/:id', (req, res) => {
    Logs.findById(req.params.id, (err, foundLogs) => {
        res.render('Show', {
            Logs: foundLogs
        })
    })
});

// EDIT
app.get('/logs/:id/edit', (req, res)=> {
    // finding Logs by ID
    // render an edit form
    // pass in the Logs data "payload"
    Logs.findById(req.params.id, (err, foundLogs) => {
        res.render('Edit', {
            Logs: foundLogs
        })
    })
})
// UPDATE
app.put('/logs/:id', (req, res) => {
    // find the Logs by ID and update
    // redirect to the Logs's show page
    Logs.findByIdAndUpdate(req.params.id, req.body, (err, updatedLogs) => {
        console.log(updatedLogs)
        res.redirect(`/logs/${req.params.id}`)
    })
})

// DELETE
app.delete('/logs/:id', (req, res)=>{
    Logs.findByIdAndRemove(req.params.id, (err, deletedLogs) => {
        res.redirect('/')
    })
});




    app.listen(port, () => {
        console.log(`listening on ${port}`)
    })