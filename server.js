const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const postmanToOpenApi = require('postman-to-openapi')
const swaggerJson = require('./PostmanCollection.json');
const cors = require('cors');


app.use(cors());
app.use(express.json());



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));
app.get('/swagger-json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerJson);
});

app.get('/generate-yml', async (req, res) => {
    const postmanCollection = "PostmanCollection.json"
    const outputFile = 'swagger.yml'
    try {
        const result = await postmanToOpenApi(postmanCollection, outputFile, {
            defaultTag: 'General'
        })
        const result2 = await postmanToOpenApi(postmanCollection, null, {
            defaultTag: 'General'
        })
        console.log(`OpenAPI specs: ${result}`)
    } catch (err) {
        console.log(err)
    }
});

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const financialAdvisorRoutes = require('./routes/financialAdvisorRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const parentCategoryRoutes = require('./routes/parentCategoryRoutes');
const meetingRoutes = require('./routes/meetingRoutes');

const path = require("path");

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/financialAdvisors', financialAdvisorRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/parentCategories', parentCategoryRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/meetings', meetingRoutes);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Node Express Server Started at ${port}!`));
