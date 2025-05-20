const temp = {
  PORT      : process.env.PORT   ?? 5050       ,
  DOMAIN    : process.env.DOMAIN ?? 'localhost',

  SERVER_URL: undefined                ,
  MODE      : process.env.MODE ?? 'dev',
};

// Processing Data Before Inserting
temp.SERVER_URL = temp.DOMAIN === 'localhost' ?
  `http://${temp.DOMAIN}:${temp.PORT}` :
  `https://${temp.DOMAIN}`             ;

// Server configuration...
export const PORT   = temp.PORT  ;
export const DOMAIN = temp.DOMAIN;

// Server properties...
export const SERVER_URL = temp.SERVER_URL;
export const MODE       = temp.MODE      ;
