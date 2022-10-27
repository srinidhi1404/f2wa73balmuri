const express = require('express');
const router = express.Router()
router.get('/', (req, res, next) => {
    if (Object.keys(req.query).length === 0) {       
        var x = Math.random();
        var y = Math.random();
        res.render(`computation`, { value_1: `Math.atan2() applied to (${x},${y}) is ${Math.atan2(y,x)}`,
        value_2: `Math.atanh() applied to ${x} is ${Math.atanh(x)}`,
        value_3: `Math.cbrt() applied to ${x} is ${Math.cbrt(x)}`
     })
    } else
        for (let a in req.query) {
            console.log(a)
            res.render(`computation`, { value_1: `Math.atan2() applied to (${x},${y}) is ${Math.atan2(y,x)}`,
            value_2: `Math.atanh() applied to ${x} is ${Math.atanh(x)}`,
            value_3: `Math.cbrt() applied to ${x} is ${Math.cbrt(x)}` })
        }
    })



module.exports = router