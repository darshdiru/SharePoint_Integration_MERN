const express = require('express');
const router = express.Router();

const Configuration = require('../../models/Configuration');
const Execute = require('../../models/Execute');


router.get('/test', (req, res) => res.send('connection route testing!'));

router.get('/fetch', (req, res) => {
    Execute.find()
    .then(exe => res.json(exe))
    .catch(err => res.status(404).json({ noresponseFound: 'No Responses found' }));
});

router.post('/connect', (req, res) => {
    Configuration.create(req.body)
    .then(conn => res.json({ msg: 'Configuration added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add configuration' }));
});

router.post('/response', (req, res) => {
    Execute.create(req.body)
    .then(conn => res.json({ msg: 'response added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to store response' }));
});

module.exports = router;