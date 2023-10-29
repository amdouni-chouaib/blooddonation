    const express = require('express');
    const mongoose = require('mongoose');
    const bodyParser = require('body-parser');
    const userRoutes = require('./Router/userRoutes');
    const cors = require('cors'); // Require the cors package
    const dotenv = require('dotenv');

    dotenv.config(); // Load environment variables from a .env file

    const app = express();
    app.use(cors());

    // Connect to MongoDB
    mongoose.connect(process.env.DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(()=>{console.log("coonected to mongodb")}).catch((error)=>{console.log(error)});

    app.use(bodyParser.json());
    app.use('/uploads', express.static('uploads')); // Serve uploaded PDF files

    // Use your user routes
    app.use('/', userRoutes);

    app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    });
