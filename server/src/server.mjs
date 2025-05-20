import express from 'express';
import ejs     from 'ejs'    ;

import router_handler from '#routes/handler.router.mjs';

// External & Internal Libraries
import {
  PORT,

  SERVER_URL,
  MODE      ,
} from '#importers/env.importer.mjs';


const app = express();

app.set('view engine', ejs);

app.use(express.urlencoded({ extended: true }));
app.use(express.json())                        ;

// Setting the routes
router_handler.forEach(routes => app.use(routes));

(async () => {
  // Turning on the server, at PORT
  app.listen(PORT, () => {
    if (MODE === 'dev') {
      console.log(
        `  ~Server listen at port: ${PORT}~\n` +
        `  ~[ ${SERVER_URL} ]~\n`
      );
    }
  });
})();
