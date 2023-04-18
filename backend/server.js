const express = require('express');
const app = express();

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello This Message is from Azure Container Apps!' });
});

app.listen(3000, () => {
  console.log('Backend listening on port 3000!');
});
