const figlet = require('figlet');

exports.outHandle = () => {
  return new Promise((resolve, reject) => {
    figlet('axw-cli', { font: 'Ghost' }, function (err, data) {
      if (err) {
        console.dir(err)
        reject()
        return
      } else {
        console.log(data)
        resolve()
      }
    })
  })
}

