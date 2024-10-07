const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json")
const PORT = 8000;


app.get("/api/users", (req, res)  => {
 
    return res.json(users);

})

app.post("/api/users", (req, res)  => {
 
    return res.json({status:"pending"});

})
app.get("/api/users/:id", (req, res)  => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id ===id);
 
    return res.json(user);

})

app.post("/api/users", (req, res) => {
    const body = req.body;
    users.push({...body, id: users.length + 1});
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err,data) => {
    return res.json({status:"success", id:users.length});
  });
    
  });
 
  app.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
  
    item.name = req.body.name;
    res.json(item);
  });
  
  // DELETE request - Remove an item
  app.delete('/items/:id', (req, res) => {
    const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).send('Item not found');
  
    const deletedItem = items.splice(itemIndex, 1);
    res.json(deletedItem);
  });
  






app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});