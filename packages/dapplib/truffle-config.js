require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gloom process only venture stool dash soap snake gloom knife equal gentle'; 
let testAccounts = [
"0x1b65d6c87499145483fc3b230720ef6db5b637303a9c16a05f391b61d9ba7c5e",
"0x0ebd590a2a34af0f98bd4bc926afe5846570f46a68644ea530341cdddd0d49bf",
"0xf3c26e26a0ac7af91cfc0c5d3446d6682737fb1f0a394d66d0095856e1b2d252",
"0xa1d253c5e589861cad0e9c5d5af2a2c92cc124a4b0755eaf9691545472a6162c",
"0x5d5d578a114e07802d5ca21381884d5928b3cf62f43931d6db0713366bd37896",
"0x10f6829fb5808169df1a169cd5642ad0c5167108b4beecf339c8baaa47dce16b",
"0xe55d909ea1213f64fc61af01294c76d3f4fcffbdbe4ad8603f15b57c8c9e53a4",
"0xf6efb65e59af274cd0630de0bf9ed5dcefc44a80a797e484ef048980c83dd624",
"0xf0928802cde7ccbdac2416c42d82faffe59830650472190559fbdd3f4d77611d",
"0x24d668fe790b23badf1f54a533bc3362f067d122a2800fbefa99132adf53fc98"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


