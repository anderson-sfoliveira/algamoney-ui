const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/artisapp-ui'));

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/dist/artisapp-ui/index.html');
});

app.listen(4200);

// comando para subir o servidor => node server.js