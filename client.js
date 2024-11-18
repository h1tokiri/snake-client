const net = require("net");

const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function (name) {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
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