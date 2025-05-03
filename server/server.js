const express = require('express');
const mongoose = require('mongoose');
const authroutes = require('./routes/auth-route');
const cors = require('cors');
mongoose.connect('mongodb://localhost:27017/newspublish').
then(()=> console.log('server connected'))
.catch((err) => console.log("server connection error",err));
const app = express();

const PORT = 3000;
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/auth',authroutes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});