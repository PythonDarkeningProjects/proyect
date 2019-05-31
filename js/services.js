"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var url = "mongodb://localhost:27017/";
var Routes = (function () {
    function Routes() {
    }
    Routes.prototype.checkUserLogin = function () {
        var endPoint = '/checkUserLogin';
        var dbName = 'batman';
        var dbCollection = 'users';
        app.post(endPoint, function (request, response) {
            console.log(request.body.user);
            console.log(request.body.pass);
            MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
                if (err)
                    throw err;
                var dbo = client.db(dbName);
                dbo.collection(dbCollection).find({}).toArray(function (err, result) {
                    if (err)
                        throw err;
                    console.log(result);
                    response.send(result);
                    client.close();
                });
            });
        });
    };
    return Routes;
}());
exports.Routes = Routes;
var Webserver = (function () {
    function Webserver(port) {
        this.port = port;
    }
    Webserver.prototype.start = function () {
        app.listen(this.port, function () { });
        console.log("(info) server started at => http://localhost:" + this.port);
    };
    return Webserver;
}());
exports.Webserver = Webserver;
