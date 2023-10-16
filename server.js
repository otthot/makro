const express = require('express');
const app = express();
const path = require('path');

//router import:
const pageRouter = require('./routere/pageDivider');

//brug af router:
app.use('/page', pageRouter);


//definerer port
const PORT = 4001;

//sætter public som static mappe
app.use(express.static(path.join(__dirname, 'public')));


//definerer endpointet '/'
app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html');

})


app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
})
