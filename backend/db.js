const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient
const mongoDbUrl = 'mongodb://localhost:27017/shop'

let _db;

const initDb = callback => {
    if (_db) {
        console.log('Database is already initialize');
        return callback(null, _db);
    }
    mongoClient.connect(mongoDbUrl)
        .then(client => {
            _db = client.db();
            callback(null, _db);
        })
        .catch(err => {
            callback(err);
        })
}

const getDb = () => {
    if (!_db) {
        throw new Error('Database not initialized')
    }
    return _db;
}

module.exports = {
    initDb,
    getDb
};