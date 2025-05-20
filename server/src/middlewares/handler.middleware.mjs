import handlingQueryParams from './queryParams.middleware.mjs';
import handlingBodyParams  from './bodyParams.middleware.mjs' ;
import handlingRouteParams from './routeParams.middleware.mjs';
// Import more middlewares if it's needed

const handler = {
  'queryParams': handlingQueryParams,
  'bodyParams' : handlingBodyParams ,
  'routeParams': handlingRouteParams,
  // Remember importing it
}

export default handler;
