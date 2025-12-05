const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const cors = require("cors");   // ⭐ ADD THIS
app.use(cors({
    origin: "http://localhost:5173",   // ⭐ Allow frontend
    credentials: true,
}));

app.use(express.json());   // ⭐ MUST COME BEFORE ROUTES

const authRoutes = require('./routes/authroutes');
const jobRoutes = require('./routes/jobroutes');

app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);

const connectDb = require('./config/database');
connectDb();

app.get("/", (req, res) => {
    res.send("This is a home Page");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
