const express = require("express");

const app = express();
const PORT = 3001;

const db = require("../database/dbAdd");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../react-client/dist"));

app.post("/aniplex/user", function (req, res) {
  db.addReview(req.body.id, req.body.user, req.body.body);
  res.send("works");
});

app.get("/aniplex/user", function (req, res) {
  console.log("helo")
  db.getReview().then(rst=>{
    res.send(rst)
  })
  
});



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
