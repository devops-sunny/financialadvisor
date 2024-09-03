const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const postmanToOpenApi = require('postman-to-openapi')
const swaggerJson = require('./PostmanCollection.json');
const cors = require('cors');
const bodyParser = require("body-parser"); 
require("./config/responseHandler");
require("./config/globals");


const path = require("path");

app.use(bodyParser.json({ limit: '1000mb' })); 
app.use(bodyParser.urlencoded({ limit: '1000mb', extended: true }));
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(cors()); 
app.use(express.json());

app.use((req, res, next) => {
    res.handler = new ResponseHandler(req, res);
    next();
 });
  

 app.use((err, req, res, next) => {
    if (res.headersSent) {
      return next(err);
    }
    console.log("err", err);
    res.handler.serverError(err);
});
  
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const financialAdvisorRoutes = require('./routes/financialAdvisorRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const parentCategoryRoutes = require('./routes/parentCategoryRoutes');
const meetingRoutes = require('./routes/meetingRoutes');
const faqRoutes = require('./routes/faqRoutes');
const termsConditionsRoutes = require('./routes/termsConditionsRoutes');
const privacyPolicyRoutes = require('./routes/privacyPolicyRoutes');
const ResponseHandler = require("./config/responseHandler");




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



app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/financialAdvisors', financialAdvisorRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/parentCategories', parentCategoryRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/meetings', meetingRoutes);
app.use('/api/faq', faqRoutes);
app.use('/api/terms', termsConditionsRoutes);
app.use('/api/privacy', privacyPolicyRoutes);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}
const port = process.env.PORT || 6000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Node Express Server Started at ${port}!`));
