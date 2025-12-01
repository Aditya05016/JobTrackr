const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const authRoutes = require('./routes/authroutes');
const jobRoutes = require('./routes/jobroutes');
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);

const connectDb = require('./config/database');

connectDb();


app.use(express.json());

app.get("/",(req,res) => {
    res.send("This is a home Page");
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});