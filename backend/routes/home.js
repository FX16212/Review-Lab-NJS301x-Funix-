const router = require('express').Router();

router.get('/', (req, res) => {
	res.json({ msg: 'Add User Page' });
});

module.exports = router;
