import { join } from 'path';

import global from '#utils/paths.util.mjs';

const temp = {
  // Templates for handling HTTP errors
  //error_at_getEJS : join(global.errorsPath, '/at_get.error.ejs' ),
  //error_at_postEJS: join(global.errorsPath, '/at_post.error.ejs'),

  // Private templates - Staff authentication
  //private_loginEJS: join(global.privatePath, '/login.private.ejs'),

  // Public templates - No authentication
  public_blogEJS      : join(global.publicPath, '/blog.public.ejs'      ),
  public_hobbiesEJS   : join(global.publicPath, '/hobbies.public.ejs'   ),
  public_videogamesEJS: join(global.publicPath, '/videogames.public.ejs'),
};

//export const errorAtGetEJS  = temp.error_at_getEJS ;
//export const errorAtPostEJS = temp.error_at_postEJS;

//export const privateLoginEJS = temp.private_loginEJS;

export const publicBlogEJS       = temp.public_blogEJS      ;
export const publicHobbiesEJS    = temp.public_hobbiesEJS   ;
export const publicVideogamesEJS = temp.public_videogamesEJS;
