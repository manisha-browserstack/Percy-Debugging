// Simple static server to serve /public on port 3000
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.redirect('/valid.html'));
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
