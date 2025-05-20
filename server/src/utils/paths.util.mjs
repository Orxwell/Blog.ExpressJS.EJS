import { fileURLToPath } from 'url' ;
import { dirname, join } from 'path';

const __filename   = fileURLToPath(import.meta.url)      ;
const server_path = join(dirname(__filename), '/../../');


// ROOT level path
const src_path    = join(server_path, '/src'   );
const static_path = join(server_path, '/static');
const views_path  = join(server_path, '/views' );

// SRC level path
const controllers_path = join(src_path, '/controllers');
const importers_path   = join(src_path, '/importers'  );
const middlewares_path = join(src_path, '/middlewares');
const routes_path      = join(src_path, '/routes'     );
const utils_path       = join(src_path, '/utils'      );

// VIEWS level path
const errors_path  = join(views_path, '/errors' );
const private_path = join(views_path, '/private');
const public_path  = join(views_path, '/public' );

// STATIC level path
const audio_path = join(static_path, '/audio');
const css_path   = join(static_path, '/css'  );
const icon_path  = join(static_path, '/icon' );
const img_path   = join(static_path, '/img'  );
const js_path    = join(static_path, '/js'   );
const pdf_path   = join(static_path, '/pdf'  );

// IMG level path
const content_path = join(img_path, '/content');


export default global = {
  srcPath   : src_path   ,
  staticPath: static_path,
  viewsPath : views_path ,

  controllersPath: controllers_path,
  importersPath  : importers_path  ,
  middlewaresPath: middlewares_path,
  routesPath     : routes_path     ,
  utilsPath      : utils_path      ,

  errorsPath : errors_path ,
  privatePath: private_path,
  publicPath : public_path ,

  audioPath: audio_path,
  cssPath  : css_path  ,
  iconPath : icon_path ,
  imgPath  : img_path  ,
  jsPath   : js_path   ,
  pdfPath  : pdf_path  ,
  
  contentPath: content_path,
};
