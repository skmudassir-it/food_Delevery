const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/auth.routes');
const foodRoutes = require('./routes/food.routes');

app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5175'], // Allow both common Vite ports
    credentials: true
}));
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
