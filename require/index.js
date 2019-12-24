/**
 * @param {特性1} require
 * 模块被加载的时候执行，加载后缓存。
 * require('./01_main')
 * require('./01_main')
 */

 /**
 * @param {特性2} require
 * 一旦某个模块被循环加载，就只输出已经执行的部分，还未执行的部分不会输出。
 * require('./02_Amain')
 * require('./02_Bmain')
 */

 /**
 * @param {exports和module.exports的关系}
 * exports = module.exports
 * 就是说 exports 是 module.exports 的快捷方式，但是我们不能改变 exports 的指向。
 */
