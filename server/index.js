const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./config/environment');
require('./database');

const routes = require('./routes/index');
const configPassport = require('./passport/config');

const assetFolder = path.resolve(__dirname, '../dist/');
const port = process.env.PORT;
const app = express();

app.use(express.static(assetFolder));
app.use(bodyParser.json());

configPassport(app, express);

app.use('/', routes());

app.use(cors({ origin: ['http://localhost:3000', 'https://rover-staging.onrender.com'] }));

app.listen(port, () => console.log(`Server is listening on port ${port}`));
