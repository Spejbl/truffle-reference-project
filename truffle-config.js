const path = require("path");
const { ManualSignProvider } = require("super-web3-provider");

// MM signing enabled networks
const rinkebySuperProvider = new ManualSignProvider({ 
  // LOCAL
  // projectId: '5dede023ca4b76333423a511',
  // token: 'BrjB+ZVe/Y1qbUFvN4tqyEUWwfDbeFk+H/B2D8UQIFKeKZSQay7sCYyA',
  
  // DEVELOP
  projectId: '5e16cbb0cd39c500115a5b87',
  token: 'h6GuPoCriwhhbdtEAFuJCxJJ3b7LGRLqOMnnpbOMFY5bmJ1cvMwgpiwV',
  
  from: '0x62B3571e172eFBB939959e858D5ED65181fFD424', 
  endpoint: 'https://rinkeby.infura.io/v3/14a9bebf5c374938b2476abe29ca5564',
  networkId: '4',//*//////
  saveArtifacts: 'true'
});

module.exports = {
  plugins: ["truffle-security", "super-artifacts"],

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
