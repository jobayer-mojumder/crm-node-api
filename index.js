import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoute';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;
const dbUrl = 'mongodb+srv://jobayer:sample@cluster0-jqnpg.mongodb.net/test?retryWrites=true&w=majority';

app.use(bodyParser.urlencoded({ extended: true }), bodyParser.json());
routes(app);

mongoose.Promise = global.Promise;

mongoose.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    console.log('mongo db connection', err)
})

app.get('/', (req, res) => {
    res.send({ status: 'SUCCESS' });
});

app.listen(PORT, () => {
    console.log('Your server is running on port ', PORT);
})
