// let fs = require("fs");
import fs from "fs";

const promise = new Promise((resolve, rejects) => {
  fs.readFile("package.json", "utf-8", (err, data) => {
    if (data) return resolve(data);
    rejects(err);
  });
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err + "");
  });
