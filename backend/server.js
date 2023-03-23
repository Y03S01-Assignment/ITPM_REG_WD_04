const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();

const innovationRoutes = require('./routes/inovations');

app.use(bodyParser.json());


app.use(innovationRoutes);

const PORT = 8000;

const DB_URL =
  "mongodb+srv://yasas:database@itpm.aw6qrpg.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB_URL)
.then(() => {
  console.log('DB connected')
})
.catch((err) => console.log('DB connection error', err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
