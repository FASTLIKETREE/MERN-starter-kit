"use strict"; 
var loaders = [];
var mongoLoad = require("./mongo");
console.log(typeof mongoLoad);
console.log(typeof mongoLoad.load);
//loaders.push(require("./mongo").load);
loaders.push(mongoLoad.load);

module.exports.loaders = loaders;

