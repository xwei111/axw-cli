#!/usr/bin/env node

const { program } = require('commander');
const optionsHandle = require('./options');
const pugtohtmlHandle = require('./pugtohtml');
const createTemHandle = require('./createTemplate');
const quckAdminHandle = require('./quck-admin');

// 版本
program
  .version(require('../package').version, '-v, --version', 'qcli的最新版本')
  .option('-h, --help', 'output help')
  .action(optionsHandle)

program
  .command('ptoh <entry> <output>')
  .description('pug模板转为html')
  .action(pugtohtmlHandle)

program
  .command('create <fileName>')
  .description('快速创建模板')
  .action(createTemHandle)

program
  .command('init <name>')
  .description('拉取axw-cli代码(测试)')
  .action(quckAdminHandle)

program.parse(process.argv)