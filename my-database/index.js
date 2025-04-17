const express = require('express')
const fs = require('fs');
const app = express()
const port = 3033

app.use(express.json());

app.get('/', (req, res) => {
   res.send('Hello World!')
 })
 
 app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
 })

// read JSON 
app.get('/data', (req, res) => {
  const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
  res.json(data);
});

// post JSON 
app.post('/data', (req, res) => {
  const newData = req.body;
  const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
  data.push(newData);
  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
  res.status(201).json({ message: 'Data saved successfully' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
