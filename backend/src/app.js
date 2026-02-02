const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/auth.routes');
const foodRoutes = require('./routes/food.routes');

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello World from API' });
});

module.exports = app;
