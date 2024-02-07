const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find({ category: "expense" });
    res.status(200).json(users);
  } catch (error) {
    res.send(`Some error occurred => ${error}`);
  }
});

router.get("/income", async (req, res) => {
  try {
    const users = await User.find({ category: "income" });
    res.status(200).json(users);
  } catch (error) {
    res.send(`Some error occurred => ${error}`);
  }
});

router.get("/top-three-costly-expense", async (req, res) => {
  try {
    // Find the top three most costly objects
    const topThreeCostlyObjects = await User.find()
      .sort({ cost: -1 }) // Sort in descending order based on 'cost'
      .limit(3); // Limit to the top three results

    res.json(topThreeCostlyObjects);
  } catch (error) {
    console.error("Error retrieving top three costly objects:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ error: "Expense not found" });
    }

    res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    console.error("Error deleting expense:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  // console.log(:hi)
  console.log("req.body1:", req.body);
  const user = new User({
    name: req.body.name,
    type: req.body.type,
    date: req.body.date,
    cost: req.body.cost,
    category: req.body.category,
  });

  try {
    // console.log("Hi");
    const result = await user.save();
    console.log("Saved user:", result); // Log the saved user
    res.json(result);
  } catch (error) {
    // console.log("bye");
    res.send(`Some error occured => ${error}`);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, type, date, cost, category } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, type, date, cost, category },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "Expense not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating expense:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
