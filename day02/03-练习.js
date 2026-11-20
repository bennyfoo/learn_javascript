// ============================================================
// Day 2 - 练习
// 运行方式：node 03-练习.js
// 做完后对照 03-练习答案.js 自查
// ============================================================

console.log("===== 练习 1：先猜后验证 =====");
// 不运行先猜每行输出：
console.log("" || "默认");
console.log(0 ?? "默认");
console.log(null ?? "默认");
console.log("a" && "b");
console.log(false || 0);
console.log((3).toFixed ? "是数字方法" : "不是");

console.log("===== 练习 2：FizzBuzz =====");
// 经典题：打印 1 到 30 的每个数，规则：
//   能同时被 3 和 5 整除 -> 打印 "FizzBuzz"
//   只能被 3 整除       -> 打印 "Fizz"
//   只能被 5 整除       -> 打印 "Buzz"
//   其他               -> 打印数字本身
// TODO: 在这里写代码（提示：一个 for 循环 + if/else if）
console.log("[TODO] 练习 2 还没完成");

console.log("===== 练习 3：箭头函数改写 =====");
// 把下面三个普通函数分别改写成箭头函数（保持功能一致），放在 TODO 处：
function cube(n) {
  return n * n * n;
}
function isPositive(n) {
  if (n > 0) {
    return true;
  } else {
    return false;
  }
}
function fullName(first, last, middle) {
  const parts = [first, middle, last].filter(Boolean); // filter(Boolean) 去掉空值
  return parts.join(" ");
}
// TODO: 写三个箭头函数版本 cube2 / isPositive2 / fullName2 并测试：
// console.log(cube2(3));                  // 27
// console.log(isPositive2(-1));           // false
// console.log(fullName2("李", "白", "")); // "李白"（中间名空被过滤）
console.log("[TODO] 练习 3 还没完成");

console.log("===== 练习 4：可变参数求最值 =====");
// 写一个 max(...nums) 函数，不借助 Math.max，自己遍历求最大值：
// console.log(max(3, 7, 2));        // 7
// console.log(max(1, 9, 4, 8, 6));  // 9
// 边界思考：一个参数都不传时返回什么比较合理？（提示：null 或 -Infinity，二选一并说明理由）
// TODO: 在这里写代码
console.log("[TODO] 练习 4 还没完成");

console.log("===== 练习 5：回调初体验 =====");
// 写一个 transform(arr, fn)：返回新数组，每个元素是 fn(元素) 的结果。
// 不许用 map（下节课才学），自己写 for 循环。
// 用它完成两个调用：
//   transform([1,2,3,4], n => n * n)        -> [1, 4, 9, 16]
//   transform(["a","b"], s => s.toUpperCase()) -> ["A", "B"]
// TODO: 在这里写代码
console.log("[TODO] 练习 5 还没完成");
