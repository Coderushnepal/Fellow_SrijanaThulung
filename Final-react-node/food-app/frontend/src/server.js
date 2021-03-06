const express = require("express");
const bodyParser = require("body-parser");
import axios from "axios";
// const shortid = reequire("shortid");

const app = express();
app.use(bodyParser);

// mongoose.connect("mongodb://localhost/food-app-db", {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology:true,
// })
// //creating model
// const Meal = mongoose.model("meals",
//     new mongoose.Schema({
//     id: { type: String,default: id.generate },
//     name: String,
//     price: Number,
//     types:[String],
//     image_url:String,
//     ingredients:String
// }))

app.get("/app/meals", async (req, res) => {
    
    const meals = await Meal.find({});
    res.send(meals);
});

app.post("/api/meals", async (req, res)=> {
    const newMeal = new Meal(req.body);
    const savedMeal = await newMeal.save();
    res.send(savedMeal);
})

app.delete("/api/meals/:id", async (req, res)=> {
    const deletedMeal = await Meal.findByIdAndDelete(req.params.id);
    res.send(deletedMeal);
})
// app.delete("/api/meals/:id", aysnc(req, res) => {
//     const deletedMeal = await Meal.findByIdAnddDelete(req.params.id);
//     res.send(deletedMeal);
// })

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));
