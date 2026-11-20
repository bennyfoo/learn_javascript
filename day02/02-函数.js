// ============================================================
// Day 2 - 第 2 课：函数（今天的重头戏）
// 运行方式：node 02-函数.js
// 核心：JS 函数是"一等公民"——像普通值一样被赋值、传参、返回。
// 这个概念你学 C++ 的函数指针/std::function 时接触过，但 JS 里无处不在。
// ============================================================

// ---------- 1. 三种写法，本质都是"创建一个函数值" ----------
// 写法 A：函数声明（类似 C++ 的普通函数定义）
function add1(a, b) {
  return a + b;
}

// 写法 B：函数表达式（函数被存进变量里）
const add2 = function (a, b) {
  return a + b;
};

// 写法 C：箭头函数（现代 JS 的主流写法，必须练熟！）
const add3 = (a, b) => a + b;

console.log(add1(1, 2), add2(1, 2), add3(1, 2)); // 3 3 3，三者完全等价

// ---------- 2. 箭头函数语法速成（重点！） ----------
// 规则：参数 => 函数体。有两种极端简化：
const square = (x) => x * x;        // 单表达式 => 省略 {} 和 return
const hello = () => console.log("hi");  // 无参数必须写 ()
const pow = (base, exp) => {        // 多语句必须写 {} 和 return
  const result = base ** exp;       // ** 是幂运算符（C++ 没有，pow() 的简洁版）
  return result;
};
console.log(square(5), pow(2, 10)); // 25 1024

// 单参数时括号可省（老代码常见，新代码风格指南一般要求保留括号）
const double = x => x * 2;
console.log(double(21));            // 42

// 箭头函数直接返回对象字面量时，要给对象套括号（否则 {} 被当成函数体）
const makePoint = (x, y) => ({ x, y });
console.log(makePoint(3, 4));

// ---------- 3. 默认参数：类似 C++ 的默认实参，但写在运行时 ----------
function greet(name = "访客", greeting = "你好") {
  return `${greeting}, ${name}!`;
}
console.log(greet());                 // 你好, 访客!
console.log(greet("huiwei"));         // 你好, huiwei!
console.log(greet("huiwei", "早上好"));

// 箭头函数同样支持
const repeat = (msg, times = 2) => msg.repeat(times);
console.log(repeat("ab"));            // abab
console.log(repeat("ab", 3));         // ababab

// ---------- 4. 剩余参数：函数的"可变参数" ----------
// 类似 C 的 va_args / C++ 模板包，但类型安全、用法简单
function sum(...nums) {               // nums 是一个真正的数组
  let total = 0;
  for (const n of nums) total += n;
  return total;
}
console.log(sum(1, 2));               // 3
console.log(sum(1, 2, 3, 4, 5));      // 15

// 展开运算符（...）反过来用：把数组"摊开"传给函数
const arr = [10, 20, 30];
console.log(sum(...arr));             // 60

// ---------- 5. 函数是一等公民：回调函数 ----------
// 把函数当参数传——这是 JS 世界的日常，Vue 里到处都是
function applyTwice(fn, value) {
  return fn(fn(value));
}
console.log(applyTwice(square, 3));           // 81（3² 再平方）
console.log(applyTwice((x) => x + 1, 5));     // 7（临时箭头函数直接传）

// 数组方法天然接收回调函数（提前预习，Day 3 细讲）
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map((n) => n * 2);       // 对每个元素执行回调
const evens = nums.filter((n) => n % 2 === 0); // 回调返回 true 的留下
console.log(doubled, evens);
// [2,4,6,8,10] [2,4]

// ---------- 6. 作用域：内层函数可以访问外层变量 ----------
function makeCounter() {
  let count = 0;                    // 这个变量被下面的内层函数"记住"了
  return () => {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter(), counter(), counter()); // 1 2 3
// 这就是"闭包"的雏形——Day 2 只需要知道这个现象，Day 9 深挖原理

// ---------- 7. 没有重载！同 C++ 的重要差异 ----------
// C++ 可以 void f(int) 和 void f(string) 重载；JS 不行，后定义的覆盖前面的。
// 惯用替代法：参数类型在函数内自己判断
function describe(value) {
  if (typeof value === "number") return `数字: ${value}`;
  if (typeof value === "string") return `字符串: "${value}"`;
  return "未知类型";
}
console.log(describe(42), describe("hi"));

// ---------- 8. 动手改一改 ----------
// 把第 5 节的 nums.map((n) => n * 2) 改成 nums.map(double)，效果一样吗？
