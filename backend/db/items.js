const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://admin:1234@testcluster-ps7os.azure.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
    if(err) {
        console.error(err);
    }else{
        console.log("Connected to mongodb")
    }
})

module.exports.fetchItem(id => {
    return new Promise((resolve, reject) => {
        client.connect(err => {
        if (err) return reject(err);

        const db = client.db("fullhouse").collection("devices");
        // perform actions on the collection object
        client.close();
        });
    })
})