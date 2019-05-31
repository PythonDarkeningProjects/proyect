// local libraries
import { Routes } from './services';
import { Webserver } from './services';

const port = 3000;
const webserver = new Webserver(port);

function addRoutes(){
    const route = new Routes();
    route.checkUserLogin();
}

addRoutes();
webserver.start(); // Starting the webserver

