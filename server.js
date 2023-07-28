const express = require('express');
const axios = require('axios');
const ejs =  require("ejs");

const app = express();

app.set("view engine", "ejs");


app.get('/', (req, res) => {

    axios.get("https://reqres.in/api/users?page=1")

        .then((response) => {

            // res.send(response.data)
            const JSONdata = response.data.data;

            console.log(JSONdata);
            
            res.render("template",{JSONdata:JSONdata});

        })

        .catch((err) => { console.log(err); });


});




app.listen(3000, () => {
    console.log('Server started on port 3000');
});