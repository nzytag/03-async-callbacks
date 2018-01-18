'use strict';

const fs = require ('fs');

let reader = module.exports = (paths, callback) => {
  let result = [];
  console.log('testing', paths.length);

  fs.readFile(paths[0], (err, data) => {
    if (err) console.error(err);
    result.push(data.toString()); //it gets buffered and returned as binary, we have to push it to string again

    fs.readFile(paths[1], (err,data) => {
      if (err) console.error(err);
      result.push(data.toString()); //it gets buffered and returned as binary, we have to push it to string again

      fs.readFile(paths[2], (err, data) =>{
        if (err) console.error(err);
        result.push (data.toString()); //it gets buffered and returned as binary, we have to push it to string again
        callback(null, result);
      });
    });
  });
};
