"use strict";

// third party libraries
const express = require('express');
const app = express();

// local libraries
const mongoUtils = require('../db/mongoUtils');
var exports = module.exports = {};

class Routes {

    verifyLogin(){
        app.route('verifyLogin').get(function(request, response){ // GET request
            mongoUtils.connectToServer(function(err, client){ // Connect to the server
                if (err){
                    console.log(`(err) could not connect to the server => ${err}`)
                }
                else {
                    let db = mongoUtils.getDB();
                    db.collection('users').find({}).toArray(function(err, result){
                        console.log(result);
                    });
                    db.close(); // Close db connection
                    console.log('(info) db connection closed!')
                }
            });
        });

    }
}



class Webserver {

    constructor(port){
        this.port = port;
    }

    start(){
        if (port) {
            app.listen(port, function() {});
        }
        else {
            console.log('(err) please define a port to start the web server!');
        }
    }
}
exports.Routes;
exports.Webserver;