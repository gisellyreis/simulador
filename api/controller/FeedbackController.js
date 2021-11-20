const express = require('express')

const Feedback = require('../models/feedback')
const router = express.Router();

const fs = require('fs');

router.get('/feedbacks', async (req, res) => {
    const feedbacks = await Feedback.find();

    return res.send({ feedbacks })
})

router.post('/feedback', async (req, res) => {
    const data = req.body;
    try {
        const feedback = await Feedback.create(data);
        console.log(feedback)
        fs.appendFileSync('../../log.json',`{"feedback": "${feedback.feedback.toString()}"}\n`, 'utf8');

        return res.send({ feedback });
    } catch (err) {
        return res.status(400).send({error: 'Registration failed'});
    }
})

router.delete('/drop_feedbacks', async (req, res) => {

    try {
        const feedback = await Feedback.find().deleteMany();
        console.log(feedback)

        return res.send({ feedback });
    } catch (err) {
        return res.status(400).send({error: 'Delete failed'});
    }
    
})

router.delete('/feedback/:id', async (req, res) => {
    const id = req.params.id;    
    try {
        const feedback = await Feedback.findByIdAndDelete(id);

        res.send({feedback});
    } catch (err) {
        return res.status(400).send({error: 'Delete failed'});
    }
})

module.exports = app => app.use('/', router);