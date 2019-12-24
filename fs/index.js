/**
 * @param 文件系统 file system 的缩写。
 * @param {读文件} readFile(path, options, callback)
 * @param {写文件} writeFile(path, [content, {encoding: 'utf8'}] | baffer, callback)
 * @param {跟文件信息相关} stat(path, callback) 
 * @param {修改文件名} rename(Path, newFileName, callback)
 * @param {删除} unlink(path, callback)
 * @param {读取文件夹相关信息} readdir(path, callback)
 * @param {创建文件夹} mkdir(fileName, callback)
 * @param {删除文件夹} rmdir(path, callback)
 * @param {监听文件变化} watch(path, options, callback)
 * 
 * @param 有方向的数据 Stream(流)
 * @param {读一点给一点} createReadStream(path).pipe()
 * @param {生产一点给一点} createWriteStream(outputPath)
 */

const fs = require('fs');
const util = require('util');

const rs = fs.createReadStream('./index.js');
rs.pipe(process.stdout); // 输出到控制台
// ----
const ws = fs.createWriteStream('./text.txt');
const tid = setInterval(() => {
  const num = '' + parseInt(Math.random() * 10);
  if (num < 8) {
    ws.write(num)
  } else {
    clearInterval(tid);
    ws.end()
  }
}, 200)

ws.on('finish', () => {
  console.log('done!');
})
// ----
const readFile = util.promisify(fs.readFile);

readFile('./text.txt')
  .then(data => {
    console.log(data.toString());
  })
  .catch(ex => {
    console.log(console.log(ex));
  })

async function test() {
  try{
    const content = await readFile('./text.txt')
    console.log(content.toString());
  } catch (ex) {
    console.log(ex);
  }
}
