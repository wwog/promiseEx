const fs = require('fs')
const path = require('path')

run()

function run() {
  const dirName = path.join(__dirname, '../dist')
  console.log('[cleanDir] ', dirName)
  cleanDir(dirName)
}

function cleanDir(dirName) {
  let files
  try {
    files = fs.readdirSync(dirName)
  } catch (error) {
    return
  }
  files.forEach((file) => {
    const filePath = path.join(dirName, file)
    const stats = fs.statSync(filePath)
    if (stats.isDirectory()) {
      cleanDir(filePath)
    } else {
      fs.unlinkSync(filePath)
    }
  })
  fs.rmdirSync(dirName)
}
