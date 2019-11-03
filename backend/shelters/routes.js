const bodyParser = require('body-parser');
const shelterRouter = require("express").Router();
const itemsdB = require("../db/items");
const sheltersdB = require("../db/shelters");

shelterRouter.use(bodyParser.json());

shelterRouter.get('/', (req, res) => {
    let id = req.query.id;
    if (id == null || id == "") id = null;

    let query = {};
    if (id) query.id = parseInt(id);

    return sheltersdB.fetchShelter(query).then(doc => {
        return res.json({ success: true, error: null, data: doc })
    }).catch(e => {
        console.error(e);
        res.status(500).json({ success: false, error: e.toString(), data: null })
    })
})

shelterRouter.get('/:id', (req, res) => {
    console.log(req.params.id)
    if (req.params.id == null || req.params.id == "")
        return res.status(400).json({ success: false, error: "Invalid Request", data: null })
    return sheltersdB.fetchShelter({ id: parseInt(req.params.id) }).then(doc => {
        return res.status(200).json({ success: true, error: null, data: doc });
    }).catch(e => {
        return res.status(500).json({ success: false, error: e.toString(), data: null });
    })
})

module.exports = shelterRouter;