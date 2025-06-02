// Framework for the Back-End
import { Router } from 'express';

// Templates for the Front-End
import {
  //errorAtGetEJS ,
  //errorAtPostEJS,

  //privateLoginEJS,

  publicHomeEJS,
} from '#utils/templates.util.mjs';

// External & Internal Libraries
import { SERVER_URL } from '#importers/env.importer.mjs';


const routerGET = Router();

// ~~~~~~~~~~~~~~~~~~~~~~~~~API-GET~~~~~~~~~~~~~~~~~~~~~~~~~
// >>-------- GET - Public Routes - BELOW --------<<
routerGET.get('/',
  async (req, res) => {
    // Try-Catch for the rendering and others
    try {
      return res.render(publicHomeEJS, {
        title: 'Laboratory - SAGA',

        server_url: SERVER_URL,
      });
    } catch (_) { return res.sendStatus(503); }
  }
);
// >>-------- GET - Public Routes - ABOVE --------<<


// >>-------- GET - Private Routes - BELOW --------<<
/*
routerGET.get('/login-staff',
  handler.queryParams({
    mapOfKeyValues: {
      username: 'string',
      password: 'string',

      error_username: 'string',
      error_password: 'string',
      error_token   : 'string',
    },
    optional: {
      userbane: undefined,
      password: undefined,

      error_username: undefined,
      error_password: undefined,
      error_token   : undefined,
    },
  }),
  async (req, res) => {
    const {
      username, password,
      error_username, error_password, error_token
    } = req.query;

    try {
      return res.render(privateLoginEJS, {
        title: "Lab - Staffs",

        data: {
          username: username,
          password: password,
    
          errorUsername: error_username,
          errorPassword: error_password,
          errorToken   : error_token   ,
        },

        server_url: SERVER_URL,
      });
    } catch (_) { return res.sendStatus(503); }
  }
);
*/
// >>-------- GET - Private Routes - ABOVE --------<<


// >>-------- GET - Errors Routes - BELOW --------<<
/*
routerGET.get('/error-at-post',
  async (req, res) => {
    try {
      return res.render(errorAtPostEJS, {
        title: 'Lab - STATUS-INFO',

        route: req.path,

        server_url: SERVER_URL,
      });
    } catch (_) { return res.sendStatus(503); }
  }
);

routerGET.get('/*',
  async (req, res) => {
    try {
      return res.render(errorAtGetEJS, {
        title: 'Lab - STATUS-INFO',

        route: req.path,

        server_url: SERVER_URL,
      });
    } catch (_) { return res.sendStatus(503); }
  }
);
*/
// >>-------- GET - Errors Routes - ABOVE --------<<
// ~~~~~~~~~~~~~~~~~~~~~~~~~API-GET~~~~~~~~~~~~~~~~~~~~~~~~~


export default routerGET;
