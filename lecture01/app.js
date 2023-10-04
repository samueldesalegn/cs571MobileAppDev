const express = require('express');

const app = express();

app.get("", (req, res) =>{
	res.status(200).send({success: true, data: "Hello world"});
})

const PORT = 5001;
// console.log(123)

app.listen(PORT, () =>console.log(`Listening on ${PORT}`));