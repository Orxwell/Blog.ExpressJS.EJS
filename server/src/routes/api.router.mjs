// Framework for the Back-End
import { Router } from 'express';

// Middlewares for the endpoints
import handler from '#middlewares/handler.middleware.mjs';

// External & Internal Libraries
import { lookup } from 'mime-types';
import { join }   from 'path'      ;
import {
  access   ,
  constants,
} from 'fs/promises';

import { SERVER_URL } from '#importers/env.importer.mjs';

import paths from '#utils/paths.util.mjs' ;
import {
  getFolders,
  getFiles  ,
} from '#utils/functions.util.mjs';


const routerAPI = Router();

// ~~~~~~~~~~~~~~~~~~~~~~~~~API-GET~~~~~~~~~~~~~~~~~~~~~~~~~
// Important Internal Constants: (IIC) ---------------¬
const ALLOWED_FORMATS = ['png', 'jpg', 'jpeg', 'webp'];

const ROUTE_SPECS = {
  audio: { path: paths.audioPath },
  css  : { path: paths.cssPath   },
  icon : { path: paths.iconPath  },
  img  : { path: paths.imgPath   },
  js   : { path: paths.jsPath    },
  pdf  : { path: paths.pdfPath   },
}
// ___________________________________________________-


// >>-------- GET - API in General - Below --------<<
routerAPI.get('/api',
  async (req, res) => {
    const folders = await getFolders(paths.staticPath);

    if (!folders) { return res.sendStatus(404); }
    
    const endpoints = folders.map(folder => `${SERVER_URL}/api/${folder}`);

    return res.status(202).json({
      availableFolders  : folders  ,
      availableEndpoints: endpoints,
    });
  }
);

routerAPI.get('/api/:route',
  handler.routeParams({ listOfRoutes: ['route'] }),
  async (req, res) => {
    const { route } = req.params;

    if (!ROUTE_SPECS[route]) {
      return res.status(400).json({ error: `Unknown route: ${route}` });
    }

    const folders = await getFolders(ROUTE_SPECS[route].path);

    if (!folders) { return res.sendStatus(404); }

    const endpoints = folders.map(folder => `${SERVER_URL}/api/${route}/${folder}`);

    return res.status(202).json({
      availableFolders  : folders  ,
      availableEndpoints: endpoints,
    });
  }
);

routerAPI.get('/api/:route/:to',
  handler.routeParams({ listOfRoutes: ['route', 'to'] }),
  async (req, res) => {
    const { route, to } = req.params;

    if (!ROUTE_SPECS[route]) {
      return res.status(400).json({ error: `Unknown route: ${route}` });
    }

    const abs_path = join(ROUTE_SPECS[route].path, to);
    const files    = await getFiles(abs_path)          ;

    if (!files) { return res.sendStatus(404); }

    const endpoints = files.map(file => `${SERVER_URL}/api/${route}/${to}/${file}`);

    return res.status(202).json({
      availableFiles    : files    ,
      availableEndpoints: endpoints,
    });
  }
);

routerAPI.get('/api/:route/:to/:file',
  handler.routeParams({ listOfRoutes: ['route', 'to', 'file'] }),
  async (req, res) => {
    const { route, to, file } = req.params;

    if (!ROUTE_SPECS[route]) {
      return res.status(400).json({ error: `Unknown route: ${route}` });
    }

    if (
      route === 'img' &&
      !ALLOWED_FORMATS.includes(file.split('.').at(-1))
    ) {
      return res.status(400).json({
        error: `Unsupported Format, instead use: ${ALLOWED_FORMATS.join(', ')}`
      });
    }

    const requested_path = join(ROUTE_SPECS[route]?.path, to, file);

    // Try-Catch
    try {
      await access(requested_path, constants.F_OK);

      res.setHeader('Content-Type', lookup(requested_path));

      return res.sendFile(requested_path);
      
    } catch (_) { return res.sendStatus(404); }
  }
);
// >>-------- GET - API in General - Above --------<<
// ~~~~~~~~~~~~~~~~~~~~~~~~~API-GET~~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~~~~~~~~~~~~~~~~~~~~API-POST~~~~~~~~~~~~~~~~~~~~~~~~~
// >>-------- POST - API in General - Below --------<<

// >>-------- POST - API in General - Above --------<<
// ~~~~~~~~~~~~~~~~~~~~~~~~~API-POST~~~~~~~~~~~~~~~~~~~~~~~~~


export default routerAPI;
