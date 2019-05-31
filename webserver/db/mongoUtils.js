const MongoClient = require( 'mongodb' ).MongoClient;
const dbToConnect = 'users'
const url = `mongodb://localhost/${dbToConnect}`; // url template

var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client ) {
      _db  = client.db(dbToConnect);
      return callback( err );
    } );
  },

  getDB: function() {
    return _db;
  },
};