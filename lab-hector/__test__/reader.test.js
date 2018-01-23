'use strict';

const reader = require('../lib/reader.js');
require('jest');

let arrayOne = [`${__dirname}/../assets/text1.txt`, `${__dirname}/../assets/text2.txt`, `${__dirname}/../assets/text3.txt`];

let arrayTwo = ['file one', 'file two', 'file three'];

describe('reader module', function () {
  describe('#reader', function () {
    it('should return an array (object)', (done) => {
       reader(arrayOne, (err, fd) => {
        if (err) console.error(err);
        expect(fd).toBeInstanceOf(Array);
        done();
      });
    });


    it('should return strings', function (done) {
       reader(arrayOne, (err, fd) => {
        if (err) console.error(err);
        expect(typeof fd[0]).toBe('string');
      done();
      });
    });
    it('should return the strings in the same order', function (done) {
       reader(`${__dirname}/../assets/text1.txt`, (err, fd) => {
        if (err) console.error(err);
        expect(fd[0].includes('#1')).toBe(true);
        done();
      });

    });
    it('should throw an error if the input is not valid file paths', function (done) {
       reader(arrayTwo, (err, fd) => {
        if (err) console.error(err);
        expect(reader()).toThrowError();
        done();
      });
    });
  });
});
