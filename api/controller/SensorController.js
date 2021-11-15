const express = require('express')

const Sensor = require('../models/sensor')
const router = express.Router();

const fs = require('fs');
const { log } = require('console');

router.get('/sensors', async (req, res) => {
    const sensors = await Sensor.find();

    return res.send({ sensors })
})

router.post('/sensor', async (req, res) => {
    const data = fs.readFileSync('../../log.json', 'utf8');
    const sensorInfo = JSON.parse(data);
    const bodyparser = require('body-parser');
    //console.log(info);
    try {
        const sensor = await Sensor.create(sensorInfo);
        console.log(sensor)
        fs.writeFileSync('../../log.json', "", 'utf8');

        return res.send({ sensor });
    } catch (err) {
        return res.status(400).send({error: 'Registration failed'});
    }
})

router.post('/upload_sensors', async (req, res) => {
    const sensors = req.body;

    sensors.forEach(async (data) =>  {
        try {
            const sensor = await Sensor.create(data);
            console.log(sensor)
    
            return res.send({ sensor });
        } catch (err) {
            return res.status(400).send({error: 'Registration failed'});
        }
    });
})

router.delete('/drop_sensors', async (req, res) => {

    try {
        const sensor = await Sensor.find().deleteMany();
        console.log(sensor)

        return res.send({ sensor });
    } catch (err) {
        return res.status(400).send({error: 'Delete failed'});
    }
    
})

router.delete('/sensor/:id', async (req, res) => {
    const id = req.params.id;    
    try {
        const sensor = await Sensor.findByIdAndDelete(id);

        res.send({sensor});
    } catch (err) {
        return res.status(400).send({error: 'Delete failed'});
    }
})

router.get('/sensor', async (req, res) => {
    const query = req.query.sensor;
    console.log(req.query.sensor);
    try {
        await Sensor.find({ "header.sensor": query}).then((result) => {
            res.send(result);
        })
    } catch (error) {
        res.status(400).send({error: err})
    }
})

module.exports = app => app.use('/', router);