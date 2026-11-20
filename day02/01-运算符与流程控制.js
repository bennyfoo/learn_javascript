// ============================================================
// Day 2 - 第 1 课：运算符与流程控制
// 运行方式：node 01-运算符与流程控制.js
// 好消息：if/switch/for/while 的写法和 C++ 几乎一样，你只需要学差异点
// ============================================================

// ---------- 1. 逻辑运算符：最大的差异点！ ----------
// C++ 的 && 和 || 返回 bool；JS 返回"决定结果的那个操作数本身"。

console.log("0 || '默认值'  =", 0 || "默认值");        // "默认值"：0 是 falsy，取右边
console.log("'a' || '默认值' =", "a" || "默认值");     // "a"：左边是 truthy，直接返回左边
console.log("1 && 2          =", 1 && 2);             // 2：左边 truthy，返回右边
console.log("0 && 2          =", 0);                  // 0：左边 falsy，短路直接返回 0

// 惯用法 1：用 || 给"可能为空的值"设默认值
const userInput = "";                    // 模拟输入框拿到的空值
const nickname = userInput || "匿名用户";
console.log("昵称 =", nickname);

// 惯用法 2：?? 空值合并 —— 只有 null/undefined 才取右边（比 || 更精确）
// 场景：0 和 "" 是合法值，不该被 || 替换掉
const volume = 0;                        // 用户把音量调到 0，这是合法值！
console.log("用 || :", volume || 50);    // 50  ← 错误！把合法的 0 当成"没填"
console.log("用 ?? :", volume ?? 50);    // 0   ← 正确！

// 惯用法 3：?. 可选链 —— 安全访问可能不存在的属性（近似判空指针）
const user = { name: "huiwei", address: { city: "深圳" } };
console.log(user?.address?.city);        // "深圳"
console.log(user?.phone?.number);        // undefined，不报错！
// C++ 里访问空指针成员会崩溃；JS 里 ?. 让你优雅地得到 undefined

// ---------- 2. 三元运算符：和 C++ 一模一样 ----------
const age = 20;
console.log(age >= 18 ? "成年" : "未成年");

// ---------- 3. if / else if / else：完全同 C++ ----------
const score = 85;
if (score >= 90) {
  console.log("优秀");
} else if (score >= 80) {
  console.log("良好");     // 命中这里
} else {
  console.log("继续努力");
}
// 注意：条件不要求是 bool（Day 1 讲过 truthy/falsy），但建议条件里写明确的比较

// ---------- 4. switch：同 C++，注意 JS 用 === 严格比较 ----------
const fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("苹果");
    break;                 // 忘了 break 会穿透（和 C++ 一样的坑）
  case "banana":
    console.log("香蕉");
    break;
  default:
    console.log("未知水果");
}

// ---------- 5. for 循环：写法同 C++，但没有 int i，只有 let i ----------
for (let i = 0; i < 3; i++) {
  console.log("for:", i);
}
// ⚠️ 千万别写 for (int i = 0; ...) —— JS 没有类型声明！
// ⚠️ 也别忘了 let：漏写 let，i 会泄漏成全局变量（老 JS 时代的经典 bug）

// ---------- 6. for...of：遍历数组/字符串，类似 C++ 的 range-for ----------
const langs = ["C++", "JavaScript", "Python"];
for (const lang of langs) {
  console.log("of:", lang);
}
for (const ch of "你好") {
  console.log("字符:", ch);
}

// for...in 遍历的是"键"（主要给对象用，数组别用它）
const scores = { math: 90, english: 85 };
for (const subject in scores) {
  console.log("in:", subject, "=", scores[subject]);
}

// ---------- 7. while / do-while / break / continue：同 C++ ----------
let n = 10;
while (n > 0) {
  if (n % 3 === 0) {
    console.log("while 命中 3 的倍数:", n);
    break;
  }
  n--;
}

// ---------- 8. 数字遍历的浮点坑 ----------
// 想打印 0 到 1 之间步长 0.1 的数？直接加浮点会累积误差：
for (let i = 0; i <= 1.0000001; i += 0.1) {
  process.stdout.write(i.toFixed(1) + " ");  // toFixed 修正显示，本质还是浮点误差
}
console.log("(注意最后一位，0.30000000000000004 这类值会混进来)");
// 正确做法：用整数循环再除
let out = "";
for (let i = 0; i <= 10; i++) {
  out += (i / 10).toFixed(1) + " ";
}
console.log("整数循环:", out);

// ---------- 9. 动手改一改 ----------
// 试着把第 6 节的 for...of 改成经典 for 循环 + 索引访问
