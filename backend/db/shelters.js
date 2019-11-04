const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_CONNECTION_STRING;

function setup(){
    return new Promise((resolve, reject) => {
        const client = new MongoClient(url, { useNewUrlParser: true });
        
        client.connect(err => {
            if(err) {
                return reject(err);
            }
            const db = client.db("fullhouse");
            return resolve(db);
        })
    })
}

module.exports.fetchShelter = query => {
    return setup().then(db => {
        return new Promise((res, rej) => {
            db.collection("shelters").find(query).toArray((err, docs) => {
                if (err) return rej(err);
                return res(docs);
            })
        })
    })
}

module.exports.addSheltersBatch = listOfItems => {
    return setup().then(db => {
        return new Promise((res, rej) => {
            db.collection("shelters").insertMany(listOfItems, (err, result) => {
                if (err) return rej(err);
                return res(result);
            })
        })
    })
}

module.exports.updateShelters = (query, update) => {
    return setup().then(db => {
        return new Promise((res, rej) => {
            db.collection("shelters").updateOne(query, {$set: update}, (err, result) => {
                if (err) return rej(err);
                return res(result);
            })
        })
    })
}