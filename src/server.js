import express from "express";
import bodyParser from "body-parser";

import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import connectDB from "./config/connectDB";
require("dotenv").config();

let app = express();
let port = process.env.PORT || 6969;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

//connect db
connectDB();

app.listen(port, () => {
  console.log(`listenning on port ${port}`);
});

// import express from "express";
// import bodyParser from "body-parser";

// import viewEngine from "./config/viewEngine";
// import initWebRoutes from "./routes/web";

// require("dotenv").config();

// let app = express();
// let port = process.env.PORT || 6969;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// viewEngine(app);
// initWebRoutes(app);

// app.listen(port, () => {
//   console.log(`listenning on port ${port}`);
// });
