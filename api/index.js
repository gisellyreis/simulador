
const express = require('express');
const cors = require('cors');
//const read = require('./data');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.get('/', async (req, res) => {
    res.send('api de sensores de temperatura e umidade')
})


require('./controller/SensorController')(app);
require('./controller/FeedbackController')(app);

app.listen(3333)

