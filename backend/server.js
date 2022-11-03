const express = require('express');
const app = express();
const homeRouter = require('./routes/home');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const posts = [];

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(cors());

app.use('/api', homeRouter);
app.post('/api/add-user', jsonParser, (req, res) => {
	posts.push(req.body.name);
});
app.get('/api/user', (req, res) => {
	res.send(posts);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
