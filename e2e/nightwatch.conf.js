/**
 * NPM standalone config, relies on npm chromedriver and running UI on localhost:3000
 * @dev used mostly for local development and e2e debugging
 */

const chrome = require("chromedriver");

module.exports = {
  src_folders: ["tests"],
  page_objects_path: ["screens"],
  globals_path : "nightwatch.globals.js",
  test_workers: false,
  webdriver: {
    start_process: true,
    server_path: chrome.path,
    port: 9515
  },
  test_settings: {
    default: {
      launch_url: "http://localhost:3000",
      filter: "tests/**/*test.js",
      screenshots:{
        enabled: true,
        on_failure: true,
        on_error: true,
        path: "screenshots"
      },
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          args: ["headless"],
          w3c: false
        }
      }
    }
  }
};
