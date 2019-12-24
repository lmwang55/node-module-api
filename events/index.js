/**
 * @param {nodeJS的两代特性之一,事件驱动}
 * 首先必须继承 events
 * @param const EventEmitter = require('events');
 * @param class MyEmitter extends EventEmitter {}
 * @param const myEmitter = new MyEmitter();
 * @param {以上是必要步骤}。
 * 
 * @param {自定义事件} on(evnetName, callback)
 * @param {该事件只触发一次} once(evnetName, callback)
 * @param {触发事件} emit(evnetName, param1, param2...)
 * @param {一个事件可绑定多个函数}
 * @param {移除指定事件的指定方法} removeListener(eventName, funcName)
 * @param {移除指定事件的所有方法} removeAllListeners(eventName)
 */

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// once 只触发一次
myEmitter.once('test', () => {
  console.log('event test')
})
setInterval(() => {
  myEmitter.emit('test')
}, 1000)

// 传入多个参数
myEmitter.on('error', (err, date) => {
  console.log(err)
  console.log(date);
})
setImmediate(() => {
  myEmitter.emit('error', new Error('oops!'), new Date())
})
