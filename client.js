const net = require("net");

// establishes a connection with the game server
const connect = function (name) {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to the game server!");

    // send name command
    conn.write(`Name: ${name}`);
  });

  conn.on("data", (data) => {
    console.log("Message from server:", data);
  });

  return conn;
};

module.exports = { connect };

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)