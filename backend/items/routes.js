const bodyParser = require('body-parser');
const itemRouter = require("express").Router();
const itemsdB = require("../db/items");

itemRouter.use(bodyParser.urlencoded({
    extended: true
}));

itemRouter.get('/', (req, res) => {
    let shelterID = req.query.shelterID;
    let count = req.query.count;
    let tags = req.query.tags;
    if (shelterID == null || shelterID == "") shelterID = null;

    if (count == null || count == "") count = null;

    if (tags == null || tags == "") tags = null;
    else tags = tags.split(",");

    if (count == null || count == "") count = null;
    else count = parseInt(count);

    let query = {};
    if (shelterID) query.shelterID = parseInt(shelterID);
    if (count) query.shelterID = parseInt(count);
    if (tags) query.tags = { $in: tags };

    return itemsdB.fetchItem(query).then(doc => {
        return res.json({ success: true, error: null, data: doc })
    }).catch(e => {
        console.error(e);
        res.status(500).json({ success: false, error: e.toString(), data: null })
    })
})

itemRouter.get('/:itemId', (req, res) => {
    console.log(req.params.itemId)
    if (req.params.itemId == null || req.params.itemId == "")
        return res.status(400).json({ success: false, error: "Invalid Request", data: null })
    return itemsdB.fetchItem({ id: parseInt(req.params.itemId) }).then(doc => {
        return res.status(200).json({ success: true, error: null, data: doc });
    }).catch(e => {
        return res.status(500).json({ success: false, error: e.toString(), data: null });
    })
})

itemRouter.post('/add', (req, res) => {
    if (req.body.id == null ||
        req.body.name == null || req.body.name == "" ||
        req.body.shelterID == null || req.body.shelterID == "" ||
        req.body.tags == null || req.body.tags.length <= 0 ||
        req.body.count == null || req.body.count <= 0) {
        return res.status(400).json({ success: false, error: "Invalid Request", data: null })
    }

    let newObj = {
        id: new Date().getTime(),
        name: req.body.name,
        shelterID: req.body.shelterID,
        tags: req.body.tags,
        count: req.body.count
    }

    return itemsdB.addItemBatch([newObj]).then(result => {
        return res.status(200).json({ success: true, error: null, data: result });
    }).catch(e => {
        return res.status(500).json({ success: false, error: e.toString(), data: null });
    })
})

module.exports = itemRouter;