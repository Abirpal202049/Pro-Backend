const express = require('express');
const format = require('date-format');

const app = express();


const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

var options = {
    customCss: '.swagger-ui .topbar { display: none }'
  };

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.status(200).send("<H1>Hello Abir From AEC and LCO Bro</H1>");
})



app.get("/api/v1/instagram", (req, res) => {
    const instasocial = {
        username : "abir_raj_pal",
        follower : 66 ,
        follow : 50,
        date : format.asString('dd-mm-yyyy || hh:mm:ss', new Date())

    }
    res.status(200).json(instasocial)
})

app.get("/api/v1/facebook", (req, res) => {
    const instasocial = {
        username : "Abir Pal",
        follower : 404 ,
        follow : 5,
        date : new Date()

    }
    res.status(200).json(instasocial)
})

app.get("/api/v1/linkedin", (req, res) => {
    const instasocial = {
        username : "Abir Pal",
        follower : 2563 ,
        follow : 1859,
        date : format.asString('hh:mm:ss', new Date())

    }
    res.status(200).json(instasocial)
})

app.get("/api/v1/:token" , (req, res) => {
    console.log(req.params)
    console.log(req.path)
    res.status(200).json({params : req.params.token})
})


app.listen(PORT, () =>{
    console.log(`Your server is running in port ${PORT}`);
})