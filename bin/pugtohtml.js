const fs = require('fs');
const pug = require('pug');
const chalk = require('chalk');
const ora = require('ora');
const { templateReg, startTemReg, endTemReg } = require('./consts');

module.exports = (entry, output) => {
  const totalSize = fs.statSync(entry).size
  const readStream = fs.createReadStream(entry, { encoding: 'utf-8' })
  let curSize = 0
  let percent = '0%'
  let source = ''
  const spinner = ora();
  console.log('read...' + percent)
  spinner.start()
  readStream.on('data', (chunk) => {
    source += chunk
    curSize += chunk.length
    // 计算读取文件进度
    percent = (curSize / totalSize * 100).toFixed(2) + '%'
    console.log('read...' + percent)
  }).on('end', () => {
    console.log('read over')
    // 读取完毕，处理数据
    const writeStream = fs.createWriteStream(output)
    console.log('pug doing...')
    const template = source && source.match(templateReg) ? source.match(templateReg)[0] : ''
    let newTemplate = pug.compile(template, { pretty: true, doctype: 'html' })()
    newTemplate = newTemplate.replace(startTemReg, '<template>')
    newTemplate = newTemplate.replace(endTemReg, '\n</template>')
    source = source.replace(templateReg, newTemplate)
    console.log('pug done')
    // 数据处理完毕，开始写入
    writeStream.write(source, { encoding: 'utf-8' })
    writeStream.end()
    writeStream.on('ready', () => {
      console.log('writing...')
    }).on('finish', () => {
      console.log('write over')
    }).on('close', () => {
      spinner.succeed(chalk.green('pug to html success !'))
    });
  })
}