const express = require('express');
const path = require('path');
const { connectDB } = require('./database');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/vault', async (req, res) => {
    const db = await connectDB();
    const key = req.query.key;
    const val = await db.get(key);
    res.json({ result: val || "ACCESS DENIED: Key not found." });
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:8080` ));