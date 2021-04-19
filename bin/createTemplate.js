const fs = require('fs')
const inquirer = require('inquirer');
const prompList = require('../templates');
const chalk = require('chalk');
const ora = require('ora');
const { choices } = prompList[1];

const getTemplate = (name) => choices.find(item => item.name == name);

module.exports = async (fileName) => {
  const { type, name } = await inquirer.prompt(prompList)
  const spinner = ora('creating...');
  spinner.start()
  const { getSource } = getTemplate(name);
  fs.writeFile(fileName, getSource(type), error => {
    if(error) {
      spinner.fail(chalk.red(`error: ${error}`))
    } else {
      spinner.succeed(chalk.green(`create ${name} success !`))
    }
  })
}