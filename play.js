const { connect } = require("./client");
const { setupInput } = require("./input");

const name = process.argv[2] || "SNK"; // default to SNK if no argumetn is given

console.log("Connecting ...");
const conn = connect(name);
setupInput(conn);