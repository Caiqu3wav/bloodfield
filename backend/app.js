import express from 'express';
import routes from './routes';
const productsRouter = require('./routes/products');

const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/products', productsRouter);

const startServer = (port = 8000) => {
    const server = app.listen(port, function () {
        console.log(`Server runnin ${server.address().port}`);
    });
};

export default startServer;