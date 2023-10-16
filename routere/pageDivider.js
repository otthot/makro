const express = require('express');
const pageRouter = express.Router();

const path = require('path');

pageRouter.get('/emner', (req, res) => {

    res.sendFile(path.join(__dirname, '../public/pages/emner.html'));

});


module.exports = pageRouter;