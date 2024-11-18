let connection;

// const conn = connect(name);

const setupInput = (conn) => {
  connection = conn;
  // console.log("Connection object in setupInput:", connection); //debug log
  // setupInput(conn);
  const stdin = process.stdin; // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // raw mode allows us to listen for individual keypresses instead of waiting for user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  
  stdin.on("data", handleUserInput);
  return stdin; // return the stdin object so we can use it elsewhere in the program
};

const handleUserInput = function (key) {
  // code handling the key press will go here
  if (key === '\u0003') { // (this is ctrl + c)
    console.log("You've quit the game!");
    process.exit();
  }

  console.log("Current connection object in handleUserInput:", connection);

  if (key === 'w') connection.write("Move: up");
  if (key === 'a') connection.write("Move: left");
  if (key === 's') connection.write("Move: down");
  if (key === 'd') connection.write("Move: right");
  // canned messages
  if (key === 't') connection.write("Say: Hello!");
  if (key === 'y') connection.write("Say: Watch out!");
  if (key === 'u') connection.write("Say: Good game!");
};

module.exports = { setupInput };