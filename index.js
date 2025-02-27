const express = require('express');
const bodyParser = require('body-parser');

//local imports
const connectionDB = require('./db.js')
const personRoutes = require('./controllers/person.controller.js')
const cors = require('cors')
const { errorHandle } = require('./midllewares')
const port = process.env.PORT || 3000;

const app = express();
//middleware
app.use(bodyParser.json());
app.use(cors({ origin:'http://localhost:4200' }));
app.options('*', cors());
app.use('/api/person', personRoutes);
app.use(errorHandle);

connectionDB().then(() => {
    console.log('DB connection seccessed')

    app.listen(port, () => console.log('Server started at 3000'));
}).catch(err => console.log(err));