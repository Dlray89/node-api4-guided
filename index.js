const server = require("./api/server.js");

const port = process.env.DB_ENV || "devolopment"; //asigning port to the server
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
