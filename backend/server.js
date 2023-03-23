const express = require("express");
const mongoose = require("mongoose")
const bodyparser = require("body-parser");

const app = express();

const productRoutes = require("./routes/products");

app.use(bodyparser.json());

app.use(productRoutes);


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
