/** This file is used to run tests in a specific order
 * @dev CI/CD driven tests will use this file, mocha bails if any one test fails
 */

require("../config.test");
require("./health.test");