const download = require('download-git-repo');
const chalk = require('chalk');
const ora = require('ora');
const rimraf = require('rimraf');
const { quickUrl } = require('./consts');

module.exports = (name) => {
  const spinner = ora('downloading...')
  spinner.start()
  rimraf(name, (res) => {
    if (res) return spinner.fail(chalk.red(`error: ${res}`))
    download(quickUrl, name, { clone: true }, function (error) {
      if (error) {
        spinner.fail(chalk.red(`error: ${error}`))
      } else {
        spinner.succeed(chalk.green(`download success !`))
      }
    })
  })
}