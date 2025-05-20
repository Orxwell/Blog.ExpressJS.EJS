export default function handlingRouteParams ({ listOfRoutes=[] }={}) {
  return (req, res, next) => {
    // Checking the types
    if (!Array.isArray(listOfRoutes)) {
      return res.status(500)
        .json({ error: "  ~Internal Server Error: 'listOfRoutes' must be an array.~" });
    }

    // Getting the Routes of the request
    const request_routes = Object.keys(req.params);
    
    // Getting the length of some variables
    const expected_len = listOfRoutes.length  ;
    const actual_len   = request_routes.length;

    // Checking if the length of the list of routes matches
    if (expected_len !== actual_len) {
      return res.status(400)
        .json({ error: `  ~Bad Request: expected ${expected_len} routes but got ${actual_len}.~` });
    }

    // Checking if the list of routes matches
    if (!listOfRoutes.every(param => request_routes.includes(param))) {
      return res.status(400)
        .json({ error: `  ~Bad Request: expected routes ${listOfRoutes} but got ${request_routes}.~` });
    }

    // Checking the order of the routes
    if (!listOfRoutes.every((param, i) => param === request_routes[i])) {
      const expected_params = listOfRoutes.join('/')  ;
      const actual_params   = request_routes.join('/');
      
      return res.status(400)
        .json({ error: `  ~Bad Request: expected routes in order ${expected_params} but got ${actual_params}.~` });
    }

    // If all checks pass, we continue
    next();
  };
};
