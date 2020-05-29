const express = require('express');
const accountControllers = require('./controllers/urls');

const router = express.Router();

router.get('/urls', accountControllers.list);
router.post('/urls', accountControllers.add);
router.put('/urls', accountControllers.update);
router.delete('/urls', accountControllers.delet);


module.exports = router;