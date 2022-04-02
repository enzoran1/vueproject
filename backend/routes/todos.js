const express = require('express');
const router = express.Router();

const todoCtrl = require('../controllers/todos');

router.get('/',todoCtrl.list);
router.get('/:id',todoCtrl.view);
router.post('/',todoCtrl.add);
router.patch('/:id',todoCtrl.edit);
router.delete('/:id',todoCtrl.delete); 

module.exports = router;