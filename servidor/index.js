const express = require('express');
const cors = require('cors');
const app = express();

require('database');
//config
app.set('port', process.env.PORT || 4500)

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api', require('./routes/route'));

app.listen(app.get('port'));
console.log('Server on port', app.get('port'));
