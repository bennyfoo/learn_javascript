// ============================================================
// Day 1 - 练习
// 运行方式：node 03-练习.js
// 要求：只允许改 TODO 处的代码，打印出每个 [OK] 或 [答案] 标记的期望结果
// 做完后对照 03-练习答案.js 自查
// ============================================================

console.log("===== 练习 1：先猜后验证 =====");
// 不运行代码，先在纸上/脑子里猜出每行的输出，再运行验证：
console.log(typeof 1);
console.log(typeof "1");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);        // 这一行有历史遗留陷阱！
console.log(1 + "1");            // 猜输出
console.log("5" - 2);            // 猜输出
console.log(0.1 + 0.2 === 0.3);  // 猜 true 还是 false？

console.log("===== 练习 2： Fahrenheit 转 Celsius =====");
// 已知华氏温度 fTemp = 98.6，计算摄氏温度并保留 1 位小数输出
// 公式：c = (f - 32) * 5 / 9
// 期望输出形如：98.6°F = 37.0°C
const fTemp = 98.6;
const cTemp = ((fTemp - 32) * 5 / 9).toFixed(1);
console.log(`${fTemp}°F = ${cTemp}°C`);


console.log("===== 练习 3：安全的字符串转数字 =====");
// 把这三个值转成数字并相加，总和应为 120（100 + 20 + 0）：
const v1 = "100";     // 来自输入框的字符串
const v2 = "20px";    // CSS 样式值
const v3 = "";        // 空字符串，注意它转数字是 0 还是 NaN，想清楚再写
const n1 = Number(v1);
const n2 = parseInt(v2,10);
const n3 = v3 === "" ? 0 : Number(v3);
console.log("总和 =", n1 + n2 + n3); 


console.log("===== 练习 4：truthy 判断 =====");
// 只用 if/else（不允许直接写 === false），判断下面变量并打印"有值"或"空"：
const maybeName = "";   // 改成 "huawei" 再跑一遍，两种都要能正确输出
if (maybeName) {
  console.log("有值:", maybeName);      // truthy 走这里
} else {
  console.log("空");                    // "" 是 falsy，走这里
}

console.log("===== 练习 5：const 陷阱 =====");
// 下面的代码有一行会报错。先猜是哪一行，注释掉它让程序能跑通，并解释为什么另一行不报错：
const user5 = { name: "A" };
user5.name = "B";        // 不报错！const 锁的是"引用"（user5 不能指向别的对象），
                         // 对象内部的内容仍然可以修改
// user5 = { name: "C" }; // 报错！Assignment to constant variable.
console.log(user5);      // { name: 'B' }
// 结论：const = 引用不可重新赋值 ≠ 内容不可变。想让对象不可变要用 Object.freeze()。
