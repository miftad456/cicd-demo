// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: "Hello from our CI/CD Node.js app!" });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Export app for testing purposes, or run it if started directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;