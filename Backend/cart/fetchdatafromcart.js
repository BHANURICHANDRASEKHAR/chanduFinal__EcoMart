const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const connector=require('../db')
require('dotenv').config();

router.get('/cartdata', async (req, res) => {
    console.log('page rendered');
    var token = req.header('x-token');
    try {
        if (!token) {
            console.log('hello');
            return res.status(401).json({ message: 'Login is required' });
        }
        const payload = jwt.verify(token,process.env.jwt_secretekey);

        const query1 = 'SELECT * FROM ecomartcart WHERE email = ?';

        connector.query(query1, [payload.email], (err, data) => {
            if (err) throw err;
            res.status(200).json({ status: 'Success', data: data });
        });
    } catch (e) {
        console.log(e.message)
        res.status(401).json({ msg: 'Something went wrong' });
    }
});

module.exports = router;
