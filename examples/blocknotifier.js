'use strict';

const BITCOIN_RPC_HOST = process.env.BITCOIN_RPC_HOST || 'localhost';
const BITCOIN_RPC_PORT = process.env.BITCOIN_RPC_PORT || 8332;
const BITCOIN_RPC_USER = process.env.BITCOIN_RPC_USER || 'bitcoin';
const BITCOIN_RPC_PASS = process.env.BITCOIN_RPC_PASS || 'local321';
const BITCOIN_RPC_AUTH = `${BITCOIN_RPC_USER}:${BITCOIN_RPC_PASS}`;

const Bitcoin = require('@fabric/core/services/bitcoin');

async function main () {
  const bitcoin = new Bitcoin({
    host: BITCOIN_RPC_HOST,
    port: BITCOIN_RPC_PORT,
    auth: BITCOIN_RPC_AUTH
  });

  bitcoin.on('block', (block) => {
    console.log('New Block:', block);
  });

  await bitcoin.start();

  return {
    bitcoin: bitcoin.id
  };
}

main().catch((exception) => {
  console.error('Could not start:', exception);
}).then((result) => {
  console.log('Started:', result);
});
