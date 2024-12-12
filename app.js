const express = require("express");
const server = express();
const cors = require("cors");
const BooksRouter = require("./routes/books");
const NotFound = require("./middlewares/NotFound");
const ServerErrorsHandler = require("./middlewares/ServerErrorsHandler");

const HOST = process.env.HOST || "http://localhost";
const PORT = process.env.PORT || "3001";

// use corsMiddle
server.use(cors());

server.get("/", (req, res) => {
  res.send("Server is up and running");
});

server.use("/api/books", BooksRouter);

// (middleware) handle 404 errors with a catch all route
server.use(NotFound);

// (middleware) handle all 500 errors
server.use(ServerErrorsHandler);

server.listen(PORT, () => {
  console.log(`Server is running on port ${HOST}:${PORT}`);
});
