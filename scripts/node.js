'use strict';

async function main () {
  return 'All done!';
}

main().catch((exception) => {
  console.error('[FABRIC:META]', 'Main Process Exception:', output);
}).then((output) => {
  console.log('[FABRIC:META]', 'Main Process Complete.  Output:', output);
});
