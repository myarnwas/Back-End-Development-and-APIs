const bodyParser = require('body-parser');

require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});
/*// /json route
app.get("/json", (req, res) => {
  let message = "Hello json"; // تعريف المتغير هنا

  // تعديل الرسالة إذا كانت القيمة في .env هي "uppercase"
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }

  // إرسال الرسالة بصيغة JSON
  res.json({ message: message });
});*/

// Root-level Logger Middleware
/*app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next(); // Pass control to the next middleware or route handler
});*/


/*app.get('/now', 
  function(req, res, next) {
    req.time = new Date().toString(); // Add current time to the request object
    next(); // Pass control to the next middleware/handler
  }, 
  function(req, res) {
    res.json({ time: req.time }); // Respond with the time in JSON format
  }
);*/
 
/*app.get('/:word/echo', (req, res) => {
  const word = req.params.word;
  res.json({ echo: word });
});*/

// Middleware to parse JSON bodies (for POST requests)
/*app.use(express.json());

// Define route for /name with GET and POST
app.route('/name')
  .get((req, res) => {
    // Get first and last name from query string
    const first = req.query.first;
    const last = req.query.last;

    if (!first || !last) {
      return res.status(400).json({ error: 'Missing first or last name in query parameters' });
    }

    res.json({ name: `${first} ${last}` });
  })
  .post((req, res) => {
    // Get first and last name from POST body (assuming JSON)
    const first = req.body.first;
    const last = req.body.last;

    if (!first || !last) {
      return res.status(400).json({ error: 'Missing first or last name in request body' });
    }

    res.json({ name: `${first} ${last}` });
  });*/

// Middleware to parse URL-encoded data (from forms)
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/name', (req, res) => {
  const firstName = req.body.first;
  const lastName = req.body.last;
  res.json({ name: `${firstName} ${lastName}` });
});


app.post('/submit-form', (req, res) => {
  // الآن يمكننا الوصول للبيانات في req.body
  const name = req.body.name;
  const age = req.body.age;
  res.send(`Name: ${name}, Age: ${age}`);
});

//app.use("/public", express.static(__dirname + "/public"));

//module.exports = app;



































 module.exports = app;
