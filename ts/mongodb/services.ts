// third party libraries
import express = require('express');
const MongoClient = require('mongodb').MongoClient;

// local libraries
import { AssertionError } from 'assert';
import assert = require('assert');
import bodyParser = require('body-parser');

// express configuration
const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // support encoded body (read POST params)
app.use(bodyParser.json()); // support json encoded body (read POST params)
//app.use(express.static(path.join(__dirname, "../../html"))); // to serve all files into html folder

const url: string = "mongodb://localhost:27017/";

export class Routes {

    checkUserLogin(){ // POST endpoint
        const endPoint = '/checkUserLogin';
        const dbName = 'batman';
        const dbCollection = 'users';

        //app.route(endPoint).post(function(request: any, response: any){ // POST method
        app.post(endPoint, function(request: any, response: any){ // POST method
            console.log(request.body.user); // POST param example
            console.log(request.body.pass);
            MongoClient.connect(url, { useNewUrlParser: true }, function(err: any, client: any) {
              if (err) throw err;
              var dbo = client.db(dbName);
              dbo.collection(dbCollection).find({}).toArray(function(err: any, result: any) {
                if (err) throw err;
                console.log(result);
                response.send(result);
                client.close();
              });
            });
        });

    }
}

export class Webserver {
    port: number;
    
    constructor(port: number){ this.port = port }

    start(){
        app.listen(this.port, function() {});
        console.log(`(info) server started at => http://localhost:${this.port}`);
    }
}