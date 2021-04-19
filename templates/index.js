const getPageSearch = require('./pageSearch');
const getTable = require('./table');

module.exports = [
  {
    type: 'list',
    name: 'type',
    message: '请选择模板类型',
    choices: [
      { name: 'html' },
      { name: 'pug' }
    ],
    default: 'pug'
  },
  {
    type: 'list',
    name: 'name',
    message: '请选择模板',
    choices: [
      { name: 'pageSearch', getSource: getPageSearch },
      { name: 'table', getSource: getTable }
    ],
    default: 'pageSearch'
  }
]