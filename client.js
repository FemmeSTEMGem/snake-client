const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  conn.on('connect', () =>{
    conn.write("Name: SHH");
  
    console.log("Connection established!");
    
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};