const express = require('express');
const mongoose = require('mongoose');
const authroutes = require('./routes/auth-route');
const app = express();

mongoose.connect('mongodb://localhost:27017/newspublish').
then(()=> console.log('server connected'))
.catch((err) => console.log("server connection error",err));

const PORT = 3000;

app.use(express.json());
app.use('/api/auth',authroutes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});