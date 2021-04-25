var express = require('express');


//var twilio = require('twilio');

var app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded( { extended: false } )); // this is to handle URL encoded data
// end parser middleware


app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index.ejs');
});
/*
// HTTP POST
app.post("/", function(request, response) {


// These are your accountSid and authToken from https://www.twilio.com/console
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);
//message
var textBody = `FROM: ${request.body.name} OBJECT: ${request.body.object} MESSAGE: ${request.body.message}`;
console.log(textBody);
// Send the text message.
client.messages.create({
  to: '+393454129267',
  from: '+12018028435',
  body: textBody
}).then(message => response.json({ message: `Message sent successfully, thank you.` }));

response.json({message: 'messaggio inviato correttamente, grazie.'});

});
*/
app.use(function(req, res, next){
  res.setHeader('Content-Type', 'text/plain');
  res.send(404, 'La pagina non esiste amico!');

});

// set port from environment variable, or 8000
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
