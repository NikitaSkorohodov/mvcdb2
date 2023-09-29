module.exports =app =>{

    const catigoryes = require("../controllers/categoryController.js");
    const router = require("express").Router()
    
    router.post("/", catigoryes.create);
    router.get("/", catigoryes.findAll);
    router.put("/:id", catigoryes.update);
    router.delete("/:id", catigoryes.delete);
    app.use('/api/categories', router)
    
}