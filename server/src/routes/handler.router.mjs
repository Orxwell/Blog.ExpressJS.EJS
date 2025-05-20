import routerAPI  from '#routes/api.router.mjs' ;
import routerGET  from '#routes/get.router.mjs' ;
import routerPOST from '#routes/post.router.mjs';
// Remember importing it

const ROUTER_HANDLER = [
  routerAPI,
  
  routerGET ,
  routerPOST,
  // Add another router-method if it's needed...
  //   Example: routerPUT or routerDELETE
];

export default ROUTER_HANDLER;