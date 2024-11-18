const net = require("net");

const PORT = 50541;

const activeConnections = [];

const server = net.createServer((client) => {
  console.log("New client connected!");

  // add client to active connections
  activeConnections.push(client);

  // notify others
  activeConnections.forEach((conn) => {
    if (conn !== client && !conn.destroyed) {
      conn.write("A new player has joined the game!");
    }
  });

  //send welcome message to the new client
  client.write("Welcome to the game!");

  // handle client disconnection

  client.on("close", () => {
    console.log("Client disconnected");

    // remove client from the list
    const index = activeConnections.indexOf(client);
    if (index > -1) activeConnections.splice(index, 1);

    // notify remaining clients
    activeConnections.forEach((conn) => {
      if (!conn.destroyed) {
        conn.write("A player has left the game.");
      }
    });
  });

  // handle errors
  client.on("error", (err) => {
    console.error("Client error:", err);

    // remove the problematic client
    const index = activeConnections.indexOf(client);
    if (index > -1) activeConnections.splice(index, 1);
  });
});

server.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});