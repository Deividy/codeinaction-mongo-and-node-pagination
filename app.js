const { MongoClient } = require('mongodb');
const { argv } = process;

const page = argv[2];
const pageLimit = 2;

const dbName = 'codeinaction';
const collectionName = 'list-video-tests';

const mongoUrl = 'mongodb://localhost:27017';

async function insertTestDocuments (collection) {
    await collection.insertMany([
        { codeinaction: 1, date: new Date() },
        { codeinaction: 2, date: new Date() },
        { codeinaction: 3, date: new Date() },
        { codeinaction: 4, date: new Date() },
        { codeinaction: 5, date: new Date() },
        { codeinaction: 6, date: new Date() },
        { codeinaction: 7, date: new Date() },
        { codeinaction: 8, date: new Date() },
        { codeinaction: 9, date: new Date() },
        { codeinaction: 10, date: new Date() },
        { codeinaction: 11, date: new Date() },
        { codeinaction: 12, date: new Date() },
        { codeinaction: 13, date: new Date() },
        { codeinaction: 14, date: new Date() }
    ]);
}

async function main () {
    const client = await MongoClient.connect(mongoUrl);

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // await insertTestDocuments(collection);

    const data = await collection.find({}, {
        limit: pageLimit,
        skip: (page - 1) * pageLimit
    }).toArray();

    console.log(`Page ${page}:`);
    console.log(data);

    client.close();
}

main();
