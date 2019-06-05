const router = require('express').Router();
const querymen  = require( 'querymen');
const bodymen = require('bodymen');
router.post('/login',
    bodymen.middleware({
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }), (req, res) => {
        console.log(req.body)
        res.json(req.body);
    }
)
module.exports =  router;