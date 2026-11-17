// ============================================================
// Day 1 - 第 1 课：变量与数据类型
// 运行方式：node 01-变量与类型.js
// 核心心智转换：C++ 声明时定类型，JS 声明时不定类型、值才有类型
// ============================================================

// ---------- 1. let 和 const ----------
// C++ 里你写 const int x = 10;  JS 里写 const x = 10;
// 规则：默认用 const，只有确实需要重新赋值时才用 let。
// 永远不要用 var（老代码遗留，作用域规则怪异）。

const PI = 3.14159;      // 常量，重新赋值会直接报错
let score = 90;          // 变量，可以重新赋值
score = score + 10;
console.log("PI =", PI, "| score =", score);

// ---------- 2. 没有类型声明，同一个变量可以装任何类型 ----------
let box = 42;            // 现在是 number
console.log(typeof box); // "number"

box = "hello";           // 现在是 string —— C++ 里这是不可能的！
console.log(typeof box); // "string"

box = [1, 2, 3];         // 现在是 object
console.log(typeof box); // "object"

// typeof 是运算符，类似 C++ 的 typeid，但更常用

// ---------- 3. number：JS 只有一种数字类型 ----------
// 相当于 C++ 的 double。没有 int / float / long 之分。
const a = 10;        // 整数，但类型还是 number
const b = 3.14;      // 小数
const c = 1e9;       // 科学计数法
console.log(a, b, c, typeof a, typeof b); // 都是 number

// 坑 1：整数和浮点没有区分，除法永远是浮点除法
console.log("10 / 3 =", 10 / 3);      // 3.3333...，不是 C++ 的 3！

// 坑 2：浮点精度问题（和 C++ double 一样，但 JS 不会帮你四舍五入）
console.log("0.1 + 0.2 =", 0.1 + 0.2);           // 0.30000000000000004
console.log("0.1 + 0.2 === 0.3 =", 0.1 + 0.2 === 0.3); // false！

// 坑 3：超大整数精度丢失，需要精度时用 BigInt
console.log("9007199254740992 + 1 =", 9007199254740992 + 1);

// ---------- 4. string：不可变，近似 std::string ----------
const name = "WorkBuddy";
const greeting = `你好, ${name}`;  // 模板字符串，类似 format，反引号 + ${}
console.log(greeting);

// 常用操作（类比 C++）
console.log("长度:", name.length);                 // size()
console.log("大写:", name.toUpperCase());          // 方法调用，不是成员函数重载
console.log("切片:", name.slice(0, 4));            // substr(0, 4)
console.log("包含?", name.includes("Buddy"));      // find != npos
console.log("拼接:", "Hi, " + name + "!");         // + 既能加数字又能拼字符串

// 注意：字符串是不可变的（和 Java/C# 一样，和 std::string 可变性不同）
name.toUpperCase();      // 这一行什么都没发生！必须接收返回值
console.log("原字符串没变:", name);

// ---------- 5. boolean 与 truthy / falsy ----------
// JS 的 if 不要求条件是 bool，任何值都能判断
// falsy（判定为假）只有 6 个：false, 0, "", null, undefined, NaN
// 其余一切（包括 "0"、[]、{}）都是 truthy —— 这是 C++ 程序员最容易踩的坑
console.log(Boolean(0), Boolean(""), Boolean("0"), Boolean([])); // false false true true

if ("0") {
  console.log('字符串 "0" 是 truthy，会进入这里（C++ 直觉会以为它相当于 0）');
}

// ---------- 6. undefined 和 null ----------
let notAssigned;         // 声明了但没赋值 -> undefined（系统级"没有值"）
const empty = null;      // 故意置空 -> null（程序员主动放的"空"，近似 nullptr）
console.log(typeof notAssigned, typeof empty); // "undefined" "object"(历史遗留 bug，别惊讶)

// ---------- 7. 动手改一改 ----------
// 把下面的 PI 改成 let 试试重新赋值，观察报错信息（报错是学习的好朋友）：
// PI = 3.15;
