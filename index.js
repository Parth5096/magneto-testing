const express = require('express')
var bodyParser = require('body-parser');
const app = express()
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', (req, res) => {
	res.send("ci cd is working ")
});

const port = 3000;
app.listen(port, () => console.log(`🚀 Listening on port ${port}...`));
                          
  