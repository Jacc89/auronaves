const mysql = require('mysql');

mysql.connect('mysql://localhost/prueba_angular', {
    
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));