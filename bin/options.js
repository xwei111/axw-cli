const chalk = require('chalk');
const { outHandle } = require('./common')

const outPutHelp = () => console.log([
  '',
  'options:',
  '  -v, --version         output version',
  '  -h, --help            output help',
  'commands:',
  '  ptoh <entry> <output>          pug to html, entry & output is [name].vue',
  '  create <fileName>             create template'
].join('\n'))

module.exports = (options) => {
  const { help } = options
  const { length } = Object.keys(options)
  outHandle().then(() => {
    if (!length) console.log(chalk.yellow('Please enter the correct format\n'))
    if (help || !length) outPutHelp()
  })
}