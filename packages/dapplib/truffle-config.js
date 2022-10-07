require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remain evil include kiwi surround teach'; 
let testAccounts = [
"0xb2f7e1b4be331e18976a0d115f2ffca21c06b695924ba574cb19a47f16af499a",
"0xfb2b6663189a48684f030798bf5a8955ea7f71a33e33626af2d9e21aac36ce24",
"0xa1220b9ff86042b33c8c2d3f181b9efe92bce3d30ff31ae612842d8c2a0bd465",
"0x12bec97b4a35a99e28fa845cfc464093d17b277d8777c6d2926196a5512d7801",
"0x2caba4492f0f98cb3ce488eec0072a57f6149ef276c99bda3f61335fa416b32f",
"0x0cd200bdd6d32285c22654dd98e9f5f4f51b82a30e7a233c0666b11470e0427d",
"0x423ecaa2bed272773f53dd9475e546ac5077ee8693721262d4eff9f428f39318",
"0xc8120d4bfa4b25704704721c1580ef52d7cfd826ff9126e76f8ad9085b0909fe",
"0x655504b59a5507984df80acab09ddffaed7e0cfe3f7b0cc5462a8a1908be132e",
"0x41f19bddd318cfb08696318225dd567768b9bd517e9dacc7ad7c64287536be05"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


