const express = require("express")
const app=express();
const port =process.env.PORT || 3000
const path = require ("path")
const publicDirectory =  path.join(__dirname , '../public')
app.use (express.static (publicDirectory))

app.set('view engine', 'hbs');
const viewsDirectory = path.join (__dirname , '../temp1/views')
app.set('views', viewsDirectory);
var hbs = require('hbs');
const partialsPath = path.join(__dirname , "../Temp1/partials")
hbs.registerPartials(partialsPath)

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get ('/' , (req,res) => {
    res.render('index' , {
        title : "HOME Page",
        desc : "This is home page"
        
    })
})

app.get ('/service' , (req,res) => {
    res.render('service' , {
        title : "Service",
        name: "Khaled",
        city:"Assiout",
        age: 22,
        img1: "images/team01.png"
    })
})

app.get ('/team' , (req,res) => {
    res.render('team' , {
        title : "TEAM",
        name: "Gad",
        city:"mansoura",
        age: 23,
        img2: "images/team03.png"
    })
})

app.get ('/about' , (req,res) => {
    res.render('about' , {
        title : "About",

    })
})

app.post('/submit-form', (req, res) => {
    const { email, password } = req.body;
    console.log(`Email: ${email}, Password: ${password}`);
    res.send('Form submitted successfully!');
});


app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
    })