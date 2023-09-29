module.exports =app =>{

    const authors = require("../controllers/authorsControllers.js");
    const router = require("express").Router()
    
    router.post("/", authors.create);
    router.get("/", authors.findAll);
    router.put("/:id", authors.update);
    router.delete("/:id", authors.delete);
    
    app.use('/api/authors', router)
    
}