const printGlobalVar = require('./another_file').printGlobalVar;
require('./my_global');

const MyClassModule = require('rewire')('./my_class');
global.MyClass = MyClassModule.__get__('MyClass')

test('some stub test', () => {
  console.log('someGlobalVar in test: ' + someGlobalVar);
  new MyClass('Hello world');
  printGlobalVar();
});