'use strict';

const fs = require ('fs');

let reader = module.exports = (paths, callback) => {
  let result = [];
  fs.readFile(paths[0], (err, data) => {
    if (err) console.error(err);
    result.push(data.toString());

    fs.readFile(paths[1], (err,data) => {
      if (err) console.error(err);
      result.push(data.toString());

      fs.readFile(paths[2], (err, data) =>{
        if (err) console.error(err);
        result.push (data.toString());
        callback(null, result);
      });
    });
  });
};
