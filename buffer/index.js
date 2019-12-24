/**
 * Buffer 是一个非常类数组的结构
 * 构造函数方法
 * @param {所占字节数} byteLength()
 * @param {是否是Buffer对象} isBuffer()
 * @param {拼接Buffer} concat() // 参数类型要求是：Array ———— [buf1, buf2...]
 * 
 * 实例的方法
 * const buf = Buffer.from('This is a test!')
 * @param {所占字节数(申请的空间)，与具体内容长度无关} length
 * @param {默认utf-8} toString('base64')
 * @param {选择指定的位置填充} fill(val, startIndex, endIndex)
 * @param {比较两个Buffer的内容是否一样} equals()
 * @param {查找Buffer中是否存在某内容} indexOf()
 * @param {复制} copy(target，targetSartr，sourceStart，sourceEnd)
 */

const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');

const buf = Buffer.from('中文字符串!');
for (let i = 0; i < buf.length; i += 5) {
  const b = Buffer.allocUnsafe(5);
  buf.copy(b, 0, i);
  console.log(decoder.write(b));
}
