if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const express = require('express')
const cors = require('cors');
const app = express();
const config = require("./config/index.js");
const port = process.env.API__PORT || 3000;
const router = require("./routes")
const errorHandler = require("./middlewares/errorHandler.js")

app.use(cors(config.api.cors))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

