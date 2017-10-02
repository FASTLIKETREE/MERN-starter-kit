/*
  Lint rules go here
*/
const express = require('express');
const app = express();
const logger = require('./utils/logger');
const loaders = require('./loader').loaders;
const CO = require("co");
const _ = require("lodash");


app.get('/', (req,res) => {
    res.sendFile(__dirname + '../../client/build/bundle.js')
});

CO(function*(){
    console.log("Load things now");
    try{
        var load = [];
        _.each(loaders, (loader) => {
            load.push(loader());
        })
        yield load;
        console.log("Never get here why not?");
    }
    catch (err){
        console.log(err)
        process.exit(1);
    }

    console.log("Don't get to server listen?");
    
    app.listen(3000, () => {
        logger.warn("Server listening on port 3000.");
    });
})
