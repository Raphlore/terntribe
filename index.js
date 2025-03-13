const express = require("express");
const { db } = require("./config.js");

const app = express();
app.use(express.json());

// Firestore collection reference
const Users = db.collection("Users");

//  GET all users
app.get("/", async (req, res) => {
  try {
    const snapshot = await Users.get();
    const list = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.send(list);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send({ error: "Failed to retrieve users" });
  }
});

// POST new user
app.post("/create", async (req, res) => {
  try {
    const data = req.body;
    await Users.add(data);
    res.send({ msg: "User Added" });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).send({ error: "Failed to add user" });
  }
});


app.listen(3000, () => console.log("Server running on port 3000"));
