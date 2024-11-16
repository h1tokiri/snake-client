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
    conn.write(`Name: ${name}`);
  });

  conn.on("data", (data) => {
    console.log("Message from server:", data);
  });

  return conn;
};

module.exports = { connect };