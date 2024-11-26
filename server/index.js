import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import mongoose from 'mongoose';

import authroutes from './routes/auth.routes.js';
import expertroutes from './routes/expert.routes.js';
import schemeroutes from './routes/schemes.routes.js';
import priceroutes from './routes/priceupdates.routes.js';

const app = express();
app.use(express.json());
app.use(bodyParser.json())

app.use(cors({
    origin: "http://localhost:3000", // React front-end
    methods: ["GET", "POST", "PUT", "DELETE"], // Add the required HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.get('/', (req, res) => {
    res.send('Welcome to AGROW ');
});

app.use('/api/auth', authroutes)
app.use('/api/expertanalysis',expertroutes)
app.use('/api/scheme',schemeroutes)
app.use('/api/price', priceroutes)

mongoose.connect("mongodb+srv://ragavanr738:Ragav%402005@agrowdb.4wgvu.mongodb.net/test?retryWrites=true&w=majority&appName=AgrowDB")
    .then(() => {
        console.log("Connected to MongoDB");
        const PORT = 3001;
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => console.error("MongoDB connection failed:", err.message));

