// ============================================================
// Day 2 - 练习答案（先自己做，再对照！）
// ============================================================

console.log("===== 练习 1 答案 =====");
console.log("" || "默认");        // "默认" —— "" 是 falsy，取右边
console.log(0 ?? "默认");         // 0 —— ?? 只在 null/undefined 时取右边，0 是合法值
console.log(null ?? "默认");      // "默认" —— null 触发 ??
console.log("a" && "b");          // "b" —— 左边 truthy，返回右边的求值结果
console.log(false || 0);          // 0 —— 两边都 falsy，返回最后求值的那个（右边）
console.log((3).toFixed ? "是数字方法" : "不是"); // "是数字方法" —— 属性存在是 truthy
// 记忆口诀：|| 和 && 返回的是"决定结果的那个值"，不是布尔值；
// ?? 是 || 的严格版，只认 null / undefined。

console.log("===== 练习 2 答案 =====");
for (let i = 1; i <= 30; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
// 两个常见优化思路：
// 1) 先判断 % 15（即同时被 3 和 5 整除），避免被 % 3 分支"截胡"；
// 2) 拼字符串法：let s = ""; if (i % 3 === 0) s += "Fizz"; if (i % 5 === 0) s += "Buzz";
//    console.log(s || i); —— 最后用 || 兜底打印数字，短路求值的实战应用。

console.log("===== 练习 3 答案 =====");
const cube2 = (n) => n ** 3;                    // 或 n * n * n
const isPositive2 = (n) => n > 0;               // 比较表达式本身就是 boolean，不用 if
const fullName2 = (first, last, middle = "") => {
  // 参数顺序调整：把可能有默认值的 middle 放最后（JS 的默认参数必须靠后，同 C++）
  const parts = [first, middle, last].filter(Boolean);
  return parts.join(" ");
};
console.log(cube2(3));                  // 27
console.log(isPositive2(-1));           // false
console.log(fullName2("李", "白"));     // "李白"
console.log(fullName2("李", "白", "太")); // "李太白"

console.log("===== 练习 4 答案 =====");
function max(...nums) {
  if (nums.length === 0) return null;   // 没有参数时返回 null 表示"没有最大值"更合理：
  let m = nums[0];                      // -Infinity 是合法数字，容易掩盖调用方的 bug
  for (const n of nums) {
    if (n > m) m = n;
  }
  return m;
}
console.log(max(3, 7, 2));              // 7
console.log(max(1, 9, 4, 8, 6));        // 9
console.log(max());                     // null

console.log("===== 练习 5 答案 =====");
function transform(arr, fn) {
  const result = [];
  for (const item of arr) {
    result.push(fn(item));              // 对每个元素调用传入的函数
  }
  return result;
}
console.log(transform([1, 2, 3, 4], (n) => n * n));           // [1, 4, 9, 16]
console.log(transform(["a", "b"], (s) => s.toUpperCase()));   // ["A", "B"]
// 你写的 transform 本质上就是下一节课要学的 Array.prototype.map！
// 写完这个练习，map 对你来说就不是新知识了，只是内置版本。
