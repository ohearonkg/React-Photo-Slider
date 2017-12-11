/* This file is used to preprocess any typescript files
** before these files are passed through jest for testing
*/
const tsc = require('typescript');  
const tsConfig = require('./tsconfig.json');

module.exports = {  
  process(src, path) {
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      return tsc.transpile(
        src,
        tsConfig.compilerOptions,
        path,
        []
      );
    }
    return src;
  },
}