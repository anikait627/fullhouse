const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_CONNECTION_STRING;

function setup(){
    return new Promise((resolve, reject) => {
        const client = new MongoClient(url, { useNewUrlParser: true , useUnifiedTopology: true});
        
        client.connect(err => {
            if(err) {
                console.error(err);
                return reject(err);
            }
            const db = client.db("fullhouse");
            return resolve(db);
        })
    })
}

module.exports.fetchItem = query => {
    return setup().then(db => {
        return new Promise((res, rej) => {
            db.collection("items").find(query).toArray((err, docs) => {
                if (err) return rej(err);
                return res(docs);
            })
        })
    })
}

module.exports.addItemBatch = listOfItems => {
    return setup().then(db => {
        return new Promise((res, rej) => {
            db.collection("items").insertMany(listOfItems, (err, result) => {
                if (err) return rej(err);
                return res(result);
            })
        })
    })
}

module.exports.updateItem = (query, update) => {
    return setup().then(db => {
        return new Promise((res, rej) => {
            db.collection("items").updateOne(query, {$set: update}, (err, result) => {
                if (err) return rej(err);
                return res(result);
            })
        })
    })
}