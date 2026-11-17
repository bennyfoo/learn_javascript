// ============================================================
// Day 1 - 第 2 课：类型转换与 ===
// 运行方式：node 02-类型转换.js
// ============================================================

// ---------- 1. == 会隐式转换，=== 才是"真相等" ----------
// 这是 JS 和 C++ 差异最大的地方之一。

console.log("1 == 1          :", 1 == 1);          // true
console.log("1 == '1'        :", 1 == "1");        // true！字符串被偷偷转成了数字
console.log("1 === '1'       :", 1 === "1");       // false，类型不同直接不等
console.log("null == undefined:", null == undefined); // true（特殊规则）
console.log("null === undefined:", null === undefined); // false

// 结论：写代码一律用 === 和 !==，把 == 忘掉。
// （例外：obj == null 可以同时判断 null 和 undefined，算是个惯用法）

// ---------- 2. 显式类型转换 ----------
// C++: static_cast<int>("42")  JS: Number("42")

// 转数字
console.log(Number("42"), typeof Number("42"));   // 42 "number"
console.log(Number("3.14"));                       // 3.14
console.log(Number("abc"));                        // NaN（Not a Number）
console.log(Number(""));                           // 0 （注意！空串是 0）
console.log(parseInt("42px"));                     // 42，解析到非数字字符停止
console.log(parseFloat("3.14abc"));                // 3.14

// NaN 的坑：NaN 不等于任何值，包括它自己
console.log(NaN === NaN); // false！判断 NaN 要用 Number.isNaN()

// 转字符串
console.log(String(123), typeof String(123));     // "123" "string"
console.log((123).toString());                     // 同样效果
console.log((3.14159).toFixed(2));                 // "3.14"，保留两位小数

// 转布尔
console.log(Boolean(0), Boolean("hi"), Boolean(null)); // false true false

// ---------- 3. + 运算符的双面性 ----------
// + 优先做字符串拼接，只要有一边是字符串就全转字符串
console.log("1" + 1);        // "11" ！！不是 2
console.log(1 + 1);          // 2
console.log(1 + "1" + 1);    // "111"
console.log("5" - 2);        // 3  （- 只能算数字，会转）

// 所以从 HTML 输入框拿到的"数字"都是字符串，先转换再计算：
const input = "100";                       // 模拟 <input> 拿到的值
console.log(Number(input) + 50);           // 150
console.log(input + 50);                   // "10050" 经典 bug

// ---------- 4. 实用技巧：一行完成转换 ----------
const numStr = "42";
console.log(+numStr);        // 42，一元 + 是最快的转数字写法
console.log(~~3.99);         // 3，双按位非 = 去掉小数（只对 32 位内整数安全）
console.log(Math.trunc(3.99)); // 3，更明确的写法

// ---------- 5. 数组和对象（先有个概念，Day 3 细讲） ----------
const arr = [10, 20, 30];
console.log(arr[0], arr[99]);   // 10 undefined —— 越界不报错！
console.log(typeof arr);        // "object" —— 数组也是对象

const user = { name: "huawei", age: 30 };   // 近似 struct / map
console.log(user.name, user["age"]);        // 两种访问方式
user.email = "test@test.com";               // 直接加字段，不用预定义！
console.log(user);
