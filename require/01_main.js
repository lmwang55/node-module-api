console.log('This is a module');

const testVar = 100;

// 如果我们不想模块在加载的时候就执行,可以将他放置到一个function中。
function test() {
  console.log(testVar)
}

module.exports = {
  testVar: testVar,
  testFn: test
}
