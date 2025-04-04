import express from "express";
import { prismaClient } from "db/client";

const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await prismaClient.user.findMany();
  res.json({
    data: users,
  });
});

app.post("/user", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await prismaClient.user.create({
    data: {
      username,
      password,
    },
  });

  res.json({
    message: "User created successfully",
    user: user.id,
  });
});

app.listen(3001, () => {
  console.log("Your app is up and successfully running on port 3001");
});
