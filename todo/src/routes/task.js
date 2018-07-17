const express = require('express');
const router = express.Router();
const Task = require('./../models/Task');

router.get('/', async (req, res) => {
	try {
		let x = await Task.find();
		res.json(x);
	} catch (err) {
		res.json({
			status: 'Failed',
		});
	}
});

router.get('/:id', async (req, res) => {
	try {
		let taskdetails = await Task.findById(req.params.id);
		res.json(taskdetails);
	} catch (err) {
		console.log(err);
		res.json({
			status: 'Failed',
		});
	}
});
router.post('/', async (req, res) => {
	let task = new Task(req.body);
	try {
		let newtask = await task.save();
		res.json({
			status: 'Done',
		});
	} catch (err) {
		if (err)
			res.json({
				status: 'Failed to save task',
				error: err,
			});
	}
});

router.put('/:id', async (req, res) => {
	try {
		await Task.findByIdAndUpdate(req.params.id, req.body);
		res.json({
			status: 'OK',
		});
	} catch (err) {
		res.send(err);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		await Task.findByIdAndRemove(req.params.id);
		res.json({
			status: 'OK',
		});
	} catch (err) {
		return res.status(500).send('Error Deleting');
	}
});

module.exports = router;
