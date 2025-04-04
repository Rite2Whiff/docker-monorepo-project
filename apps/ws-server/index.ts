import { WebSocketServer } from "ws";
import { prismaClient } from "db/client";

const ws = new WebSocketServer({ port: 8080 });

ws.on("connection", async function (socket) {
  await prismaClient.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
  socket.send("Your are successfully connected to the ws server");
});
