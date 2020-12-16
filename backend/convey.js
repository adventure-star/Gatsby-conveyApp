const express = require("express");
const router = express.Router();
const orders = require("./data/orders.json");
const shipments = require("./data/shipments.json");
const comments = require("./data/comments.json")

router.get("/", (req, res) => {
  res.send(orders);
});

router.get("/:orderNumber", (req, res) => {
    const orderNumber = req.params.orderNumber;
    const order = orders.filter(function(item) {
      return item.orderNumber == orderNumber;
    });
    if(order.length == 0) return res.status(400).send("Invalid order ID.");
    const filtered_shipments = shipments.filter(function(item){
      return item.orderNumber == order[0].orderNumber;
    })
    res.send(filtered_shipments);
});

router.get("/comment/:foodItem",(req,res)=>{
  
  const foodItem = req.params.foodItem;
  console.log(foodItem);
  const commentData = comments[foodItem];
  
  res.json(commentData);
})

router.post("/comment/",(req,res)=>{
  console.log(req.body);
  var item = Object.keys(req.body)[0];
  var comment = req.body[item];
  comments[item].push(comment);
  console.log(comments[item]);
  res.send(comments[item]);
})

module.exports = router;
