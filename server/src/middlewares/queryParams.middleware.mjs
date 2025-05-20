import { castingType } from '#utils/functions.util.mjs';

export default function handlingQueryParams({ mapOfKeyValues={}, optional={} }={}) {
  return (req, res, next) => {
    // Checking the types
    if (
      typeof mapOfKeyValues !== 'object' ||
      typeof mapOfKeyValues === null
    ) {
      return res.status(500).json({
        error: "  ~Internal Server Error: 'mapOfKeyValues' must be an object.~"
      });
    }

    if (
      typeof optional !== 'object' ||
      typeof optional === null
    ) {
      return res.status(500).json({
        error: "  ~Internal Server Error: 'optional' must be an object.~"
      });
    }

    // Getting the request-data: { a: 'etc' }
    const request_data = req.query;

    // Getting the keys of MapOfKeyValues & the required-keys
    const internal_keys = Object.keys(mapOfKeyValues);
    const required_keys = internal_keys.filter(key => !optional.hasOwnProperty(key));

    // Getting the keys of the request-data & the missing-keys
    const request_keys = Object.keys(request_data);
    const missing_keys = required_keys.filter(key => !request_keys.includes(key));

    // If missing-keys has lenght that means the URL is incomplete
    if (missing_keys.length > 0) {
      return res.status(400).json({
        error: `  ~Bad Request: missing required keys [${missing_keys}].~`
      });
    }

    // If the optional-key doesn't have a value, asign a default
    Object.entries(optional).forEach(([key, default_value]) => {
      if (!request_data.hasOwnProperty(key)) {
        request_data[key] = default_value;
        
        req.query[key] = default_value;
      }
    });

    // Verify the types
    request_keys.forEach(key => {
      const valid_types   = mapOfKeyValues[key].split('|')     ;
      const actual_value  = request_data[key]                  ;
      const casted_type   = castingType({ cast: actual_value });

      if (!valid_types.includes(casted_type)) {
        return res.status(400).json({
          error: `  ~Bad Request: expected types '${valid_types}' for key '${key}' but got '${casted_type}' instead.~`
        });
      }
    });

    // If all checks pass, we continue
    next();
  };
};
