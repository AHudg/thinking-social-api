const express = require("express");
const mongoose = require("mongoose");

// create the express application
const app = express();
const PORT = process.env.PORT || 3001;

// parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json());
// URL-encoded data will be parsed w/ qs library allowing creation of nested objects from query strings
// and does not filter out ? from the query string
app.use(express.urlencoded({ extended: true }));
// serves static files upon initializing
app.use(express.static("public"));

// links the routes directory for the server to use
app.use(require("./routes"));

// tells mongoose which database we want to connect to
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/social-thoughts",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// use this to log mongo queries being executed
mongoose.set("debug", true);

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));
