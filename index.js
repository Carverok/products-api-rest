require('dotenv').config();

const app = require('./server');
const port = process.env.LocalPort || 3000;

app.listen(port, () => console.log(`server running at localhost:${port}`));
