// Framework for the Back-End
import { Router } from 'express';


const routerPOST = Router();

// ~~~~~~~~~~~~~~~~~~~~~~~~~API-POST~~~~~~~~~~~~~~~~~~~~~~~~~
// >>-------- POST - Public Routes - BELOW --------<<
routerPOST.post('/ping',
  async (req, res) => {
    try       { return res.sendStatus(202); }
    catch (_) { return res.sendStatus(503); }
  }
);
// >>-------- POST - Public Routes - ABOVE --------<<


// >>-------- POST - Private Routes - ABOVE --------<<
/*
routerPOST.post('/login-staff',
  handler.bodyParams({
    mapOfKeyValues: {
      username: 'string',
      password: 'string',
    },
  }),
  async (req, res) => {
    const { username, password } = req.body;

    try {
      return res.redirect('/menu?' +
        `username=${username}&` +
        `token=${token}`
      );

    } catch (_) { res.sendStatus(503); }
  }
);
*/
// >>-------- POST - Private Routes - BELOW --------<<


// >>-------- POST - Errors Routes - BELOW --------<<
/*
routerPOST.post('/*',
  async (req, res) => {
    try       { return res.redirect('/error-at-post'); }
    catch (_) { return res.sendStatus(503)           ; }
  }
);
*/
// >>-------- POST - Errors Routes - ABOVE --------<<
// ~~~~~~~~~~~~~~~~~~~~~~~~~API-POST~~~~~~~~~~~~~~~~~~~~~~~~~


export default routerPOST;
