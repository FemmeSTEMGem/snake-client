const net = require("net");

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (handleUserInput) => {
    if (handleUserInput === '\u0003') {
      process.exit();
    } else if (handleUserInput === "w") {
      conn.write("Move: up");
    } else if (handleUserInput === "a") {
      conn.write("Move: left");
    } else if (handleUserInput === "s") {
      conn.write("Move: down");
    } else if (handleUserInput === "d") {
      conn.write("Move: right");
    };
  });
  return stdin;
};

let connection

module.exports = {setupInput};