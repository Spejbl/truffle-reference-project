const path = require("path");
const { ManualSignProvider } = require("super-web3-provider");

// MM signing enabled networks
const rinkebySuperProvider = new ManualSignProvider({ 
  deploymentSpaceId: '5e0ef493e6b4a236ba99e54d',
  token: 'tlRBM4W5Gr1Lk0pnYlGN8+S4XOYOF7ZFf9mS5m7nEb2i/flOmSLrcHwA',
  from: '0xEA6630F5bfA193f76cfc5F530648061b070e7DAd', 
  endpoint: 'https://rinkeby.infura.io/v3/14a9bebf5c374938b2476abe29ca5564',
  networkId: '4',//*//////
});

module.exports = {
  plugins: ["truffle-security"],

  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    rinkeby_metamask: {
      provider: () => {
          // We have created outside this function as we Truffle will call this function multiple times... and we don't want to create multiple 
          // instances of the provider in that case
          return rinkebySuperProvider;
      },
      network_id: '4'
    }
  }
};
