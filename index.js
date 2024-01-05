const port = process.env.PORT || 8080;
const host = process.env.HOST || '0.0.0.0';
const express = require('express');
const index = express();

index.use('/imagens', express.static('imagens'));
index.use('/views', express.static('views'));


require('./init/db.js')(index, () => {
  require('./init/middleware')(app);
  require('./init/router')(app);
  index.listen(port, host, (error) => {
    if (error) throw error;
    console.log('Your app is listening on ' + port);
  });
});
