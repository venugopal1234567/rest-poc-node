const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect('').then(con => {
    console.log('DB connection Successfully!');
});

// Start the server
const port = "3000";
app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});