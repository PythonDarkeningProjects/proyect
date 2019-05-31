"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var services_1 = require("./services");
var services_2 = require("./services");
var port = 3000;
var webserver = new services_2.Webserver(port);
function addRoutes() {
    var route = new services_1.Routes();
    route.checkUserLogin();
}
addRoutes();
webserver.start();
