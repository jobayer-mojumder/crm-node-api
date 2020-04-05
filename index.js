import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoute';

const app = express();
const PORT = 3000;

routes(app);

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({ status: 'SUCCESS' });
});

app.listen(PORT, () => {
    console.log('Your server is running on port ', PORT);
})
