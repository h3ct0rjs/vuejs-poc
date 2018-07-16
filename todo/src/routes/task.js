const express = require('express');
const router = express.Router();
const Task = require('./../models/Task');

router.get('/', async (req, res) => {
	const x = await Task.find();
	res.json(x);
});

router.post('/', async (req, res) => {
	const task = new Task(req.body);
	await task.save();

	res.json({
		status: 'Done',
	});
});

router.put('/:id', async (req, res) => {
	await Task.findByIdAndUpdate(req.params.id, req.body);
	res.json({
		status: 'OK',
	});
});

router.delete('/:id', async (req, res) => {
	await Task.findByIdAndRemove(req.params.id);
	res.json({
		status: 'OK',
	});
});

module.exports = router;
