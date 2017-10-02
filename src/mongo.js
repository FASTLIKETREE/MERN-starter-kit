"use strict";
//var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient
var assert = require('assert');
var CO = require('co');

var db = null;

function load(){
    return CO(function*(){
        // Connection URL 
        var url = 'mongodb://root:oilrig2.0@192.168.0.25:27017/biddy';
        // Use connect method to connect to the Server 
        try {
            console.log("Trying to connect to mongo");
            db = yield MongoClient.connect(url);
        } catch(err) {
            console.log(err);
            throw err;
        }
    })
}

module.exports.db = db;
module.exports.load = load;
