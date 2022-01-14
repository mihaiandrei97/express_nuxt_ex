const express = require('express');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;
app.use(cors({
  origin: ['http://localhost:3000']
  }
))

app.get('/', (req, res) => {
  res.json({
    message: 'Test data'
  });
});

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});