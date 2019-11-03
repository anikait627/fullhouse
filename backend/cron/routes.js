const cronRouter = require("express").Router();
const sheltersdB = require("../db/shelters");
const itemsdB = require("../db/items");

// hardcoded good thresholds
let thresholds = {
    1: {
        shoes: 0.15,
        shirts: 0.25,
        pants: 0.25,
        baby: 0.25
    },
    2: {
        shoes: 0.5,
        shirts: 0.1,
        pants: 0.2,
        baby: 0.2
    },
    3: {
        shoes: 0.30,
        shirts: 0.05,
        pants: 0.1,
        baby: 0.1
    },
    4: {
        shoes: 0.1,
        shirts: 0.1,
        pants: 0.7,
        baby: 0.1
    }
}

cronRouter.get('/refreshPercentages', (req, res) => {
    let promises = [];
    for (let i=1; i<=4; i++) {
        promises.push(
            itemsdB.fetchItem({shelterID: i}).then(docs => {
                console.log(i)
                let totalCount = docs.length;
                console.log(totalCount)
                let counts = {
                    shoes: 0,
                    shirts: 0,
                    pants: 0,
                    baby: 0
                }

                let allCounts = {}

                for (let doc of docs) {
                    for (let key in counts) {
                        doc["tags"] = doc["tags"].map(item => item.toLowerCase());
                        if (doc["tags"].includes(key))
                            counts[key] += 1;
                        for (tag of doc["tags"]) {
                            if(allCounts[tag])
                                allCounts[tag] += 1
                            else
                                allCounts[tag] = 1
                        }
                    }
                }
                console.log(counts)

                let percentages = {};

                for (let key in counts) {
                    percentages[key+"Percent"] = counts[key] / totalCount;
                    percentages[key+"Threshold"] = thresholds[i][key];
                    percentages[key+"PercentOutOfMet"] = (counts[key] / totalCount) / thresholds[i][key];
                    percentages[key+"MetThreshold"] = (counts[key] / totalCount) >= thresholds[i][key];
                }

                console.log(percentages);
                percentages["tagCounts"] = allCounts;
                percentages["totalItemCount"] = totalCount;

                return sheltersdB.updateShelters({id: i}, percentages);
            })
        );
    }

    return Promise.all(promises).then(_ => {
        return res.status(200).json({success: true, error: null, data: null});
    }).catch(e => {
        console.error(e);
        return res.status(500).json({success: false, error: e.toString(), data: null});
    })
})

module.exports = cronRouter;