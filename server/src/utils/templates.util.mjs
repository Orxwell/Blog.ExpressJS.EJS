import { join } from 'path';

import global from '#utils/paths.util.mjs';

const temp = {
  // Templates for handling HTTP errors
  //error_at_getEJS : join(global.errorsPath, '/at_get.error.ejs' ),
  //error_at_postEJS: join(global.errorsPath, '/at_post.error.ejs'),

  // Private templates - Staff authentication
  //private_loginEJS: join(global.privatePath, '/login.private.ejs'),

  // Public templates - No authentication
  public_homeEJS: join(global.publicPath, '/home.public.ejs'),
};

//export const errorAtGetEJS  = temp.error_at_getEJS ;
//export const errorAtPostEJS = temp.error_at_postEJS;

//export const privateLoginEJS = temp.private_loginEJS;

export const publicHomeEJS = temp.public_homeEJS;
