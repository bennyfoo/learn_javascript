// ============================================================
// Day 1 - 练习答案（先自己做，再对照！）
// ============================================================

console.log("===== 练习 2 答案 =====");
const fTemp = 98.6;
const cTemp = ((fTemp - 32) * 5 / 9).toFixed(1);   // toFixed 返回字符串，正好用于展示
console.log(`${fTemp}°F = ${cTemp}°C`);
// 注意：toFixed 返回的是字符串 "37.0"。要参与后续计算的话用 Math.round(x * 10) / 10。

console.log("===== 练习 3 答案 =====");
const v1 = "100";
const v2 = "20px";
const v3 = "";
// v1 直接 Number 转换；v2 带 px 只能 parseInt；v3 是空串，Number("") 是 0，
// 如果业务上"空"应该算缺失而不是 0，要显式处理：
const n1 = Number(v1);        // 100
const n2 = parseInt(v2, 10);  // 20，第二个参数 10 表示十进制（好习惯）
const n3 = v3 === "" ? 0 : Number(v3);  // 显式决定空串的语义
console.log("总和 =", n1 + n2 + n3);  // 120
// 160 -> 120 的勘误：Number("") 是 0，Number("20px") 是 NaN，parseInt("20px") 是 20，
// 所以 100 + 20 + 0 = 120。注意如果三个都改用 parseInt，parseInt("") 是 NaN，
// 总和会变成 NaN（NaN 会"传染"任何运算）：
// 本题教学点：Number("") === 0，Number("20px") === NaN，parseInt("20px") === 20。
// 若按 parseInt 处理全部三个值：parseInt("100")+parseInt("20px")+parseInt("") = 100+20+NaN = NaN！
console.log("用 parseInt 统一处理时，parseInt('') 是 NaN，导致总和变成 NaN：",
  parseInt(v1, 10) + parseInt(v2, 10) + parseInt(v3, 10));

console.log("===== 练习 4 答案 =====");
const maybeName = "";
if (maybeName) {
  console.log("有值:", maybeName);      // truthy 走这里
} else {
  console.log("空");                    // "" 是 falsy，走这里
}
// 把 maybeName 改成 "huiwei" 再跑，输出"有值: huiwei"。
// 更明确的写法（推荐，语义更清晰）：if (maybeName !== "") {...}
// 甚至可以处理 undefined：if (maybeName) 天然同时覆盖 ""、null、undefined。

console.log("===== 练习 5 答案 =====");
const user5 = { name: "A" };
user5.name = "B";        // 不报错！const 锁的是"引用"（user5 不能指向别的对象），
                         // 对象内部的内容仍然可以修改
// user5 = { name: "C" }; // 报错！Assignment to constant variable.
console.log(user5);      // { name: 'B' }
// 结论：const = 引用不可重新赋值 ≠ 内容不可变。想让对象不可变要用 Object.freeze()。
