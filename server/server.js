const express = require('express')
const app = express()


app.use(express.static("Public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs")


app.get("/", function (req, res) {
    res.sendFile(__dirname+"/test.html")
})


app.listen(2000, function (err) {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Server running on port 2000")
        console.log("%s", "http://localhost:2000")
    }
});