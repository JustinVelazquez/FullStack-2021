const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb = require('./util/database');
const apiRoutes = require('./routes/api');

dotenv.config();

connectDb();

// Intialize our Express Server
const app = express();

//Call our dependencies
app.use(cors());
app.use(morgan('tiny'));

//Body-parsing middle
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.get('/', (req, res) => {
  res.json('Hello World');
});
app.use('/api', apiRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Sever is running on port ${PORT}... ya better go catch it!`);
});
