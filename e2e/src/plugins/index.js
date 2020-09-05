const { preprocessTypescript } = require("@nrwl/cypress/plugins/preprocessor");

// 'on' is used to hook into various events Cypress emits
// 'config' is the resolved Cypress config
module.exports = (on, config) => {

  on("file:preprocessor", preprocessTypescript(config));
};