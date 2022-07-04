//----------------------Boiler Plate Stuff-----------------------
const express = require('express');
const bodyParser = require('body-parser');

//CHANGE THEN UNCOMMENT
// const taskRouter = require('./routes/task.router');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//CHANGE THEN UNCOMMENT
// app.use('/tasks', taskRouter);

// Serve back static files by default
app.use(express.static('server/public'));

// Start listening for requests on a specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});

//----------------------------------------------------------------
