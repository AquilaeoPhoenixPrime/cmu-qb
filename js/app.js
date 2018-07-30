const express = require('express');
const bodyParser = require('body-parser');
const {body, validationResult} = require("express-validator/check");
const {sanitizeBody} = require("express-validator/filter");

const sendmail = require('sendmail')();

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.post('/contact_us.html', [
	body('firstname').isByteLength({min:1, max:25}),
	body('lastname').isByteLength({min:1, max:30}),
	body('email').isEmail().normalizeEmail(),
	body('subject').isByteLength({min:1, max:80})
	], (req, res) => {
		const errors = validationResult(req);
		  if (!errors.isEmpty()) {
		    return res.status(422).json({ errors: errors.array() });
		  }
		sendmail({
			from: 'no-reply@sladuca.github.io',
			to: 'sladuca777@gmail.com',
			subject: `${req.body.subject}`,
			text: `$${req.body.message}`
		}, (err, reply) => {
			console.log(err && err.stack);
			console.dir(reply);
		});
	});
