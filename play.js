const { connect } = require("./client");

const name = process.argv[2] || "SNK"; // default to SNK if no argumetn is given

console.log("Connecting ...");
connect(name);