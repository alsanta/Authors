const authorManager = require("../controllers/author.controller")

module.exports = app =>{
    app.get("/api/authors",authorManager.getAll);
    app.post("/api/authors",authorManager.createNew);
    app.get("/api/authors/:id",authorManager.getById);
    app.delete("/api/authors/:id",authorManager.deleteById);
    app.put("/api/authors/:id",authorManager.updateById);
}
