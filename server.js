const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/artisapp-ui'));

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/dist/artisapp-ui/index.html');
});

//app.listen(4200);
app.listen(process.env.PORT || 4200) ;
// No Heroku sempre terá uma variavel de ambiente "PORT".

// comando para subir o servidor => node server.js