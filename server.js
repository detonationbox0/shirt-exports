const express = require('express');
const app = express();

app.use(express.static("public"))

let x = 0;

app.get("/hello", (req, res) => {
    x++
    res.json({
        message:`${x} (Server) Hello!`
    })
})




app.listen(3000);
