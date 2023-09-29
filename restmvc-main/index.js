const express = require("express");
const cors = require("cors")
const app = express();

 
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req,res)=>{
    res.json({message:"welcome"})
})
require(".//routes/categoriesroutes")(app);
require(".//routes/booksroutes")(app);
require(".//routes/authorsroutes")(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING ${PORT}.`);

})