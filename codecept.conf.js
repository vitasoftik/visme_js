const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://dashboard.visme.co/v2/login',
      browser: 'chrome',
      host: 'localhost',
      port: 4444,
      restart: true,
      smartWait: 5000,
      waitForTimeout: 30000,
      windowSize: '1920x1680',
      chromeOptions: {
        args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox" ]
      }
    }
  },
  include: {
    I        : './steps_file.js',
    authPage : './pages/auth.js',
 //   mainPage : './pages/main.js',

  },
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  name: 'visme_codeceptjs'
}