const express = require('express');

const routerLogin = require('./routers/routerLogin');
const routerUser = require('./routers/routerUser');
const routerCategory = require('./routers/routerCategory');
const routerPost = require('./routers/routerPost');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', routerLogin);
app.use('/user', routerUser);
app.use('/categories', routerCategory);
app.use('/post', routerPost);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
