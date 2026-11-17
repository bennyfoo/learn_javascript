# 一个月 JavaScript → Vue 学习计划（C++ 基础版）

> 前提：你有 C++ 编程基础，语法逻辑、算法思维可直接迁移。
> 本计划假设每天投入 2～3 小时（工作日晚上 + 周末半天），目标是 30 天后能独立用 Vue 3 开发中小型前端应用。

## 学习原则

1. **别把 JS 当 C++ 学**。C++ 的 class/继承/模板思维先放下，JS 是动态类型 + 原型 + 事件驱动的语言，前两周重点是适应它的"自由"。
2. **边写边学，不要只看视频**。每学一个概念立刻在浏览器控制台或 Node 里敲代码验证。
3. **遇到 C++ 对应物就类比**，但注意差异（见每节标注的 ⚠️）。
4. **两周后开始写项目，用项目驱动剩余学习**。

## 环境准备（第 1 天，30 分钟）

- 安装 [Node.js LTS](https://nodejs.org)（自带 npm）
- 编辑器：VS Code + 插件 Volar（Vue 官方语言支持）、ESLint、Prettier
- 浏览器：Chrome/Edge，学会打开 DevTools（F12）的 Console 和 Network 面板
- 试运行：`node -v`、`npm -v`

---

## 第 1 周：JS 核心基础（Day 1–7）

**目标**：能在浏览器里独立写交互页面，掌握 ES6+ 语法。

| 天 | 内容 | 练习 |
|----|------|------|
| Day 1 | 变量（let/const）、数据类型、类型转换 | ⚠️ 没有编译期类型检查，`==` 会隐式转换，永远用 `===` |
| Day 2 | 运算符、流程控制、函数（声明/表达式/箭头函数） | ⚠️ 函数是一等公民，可以赋值给变量、当参数传 |
| Day 3 | 对象（字面量）、数组及常用方法（map/filter/reduce/forEach） | ⚠️ 对象≈动态的 map，没有访问控制符；数组方法比 C++ STL 的 lambda 链式写法更常用 |
| Day 4 | 解构赋值、展开运算符、模板字符串、ES Module（import/export） | 写一个小模块练习导入导出 |
| Day 5 | DOM 操作：querySelector、修改内容/样式、创建节点 | 写一个点击计数器 |
| Day 6 | 事件：addEventListener、事件对象、事件冒泡与委托 | 写一个可增删的待办列表（纯 JS 版） |
| Day 7 | **周复习**：把待办列表重构为模块化代码，加上 localStorage 持久化 | 产出：纯 JS 待办应用 v1 |

**本周参考**：《JavaScript 教程》阮一峰（入门部分）或 MDN；Modern JavaScript Tutorial（javascript.info 中文版）。

---

## 第 2 周：JS 进阶与异步（Day 8–14）

**目标**：理解 JS 的灵魂——异步模型；这是后续学 Vue 的地基，不要跳。

| 天 | 内容 | 练习 |
|----|------|------|
| Day 8 | `this` 的指向、call/apply/bind | ⚠️ 和 C++ 完全不同，`this` 由调用方式决定 |
| Day 9 | 闭包、作用域链、立即执行函数 | 用闭包写一个计数器/私有变量 |
| Day 10 | 原型与原型链、class 语法（TS 风格的语法糖） | ⚠️ JS 的 class 是原型语法糖，继承模型和 C++ 不同，知道即可 |
| Day 11 | 异步：回调 → Promise（then/catch/finally） | ⚠️ JS 是单线程 + 事件循环，没有多线程心智负担 |
| Day 12 | async/await、Promise.all、错误处理 | 重写 Day 11 的练习 |
| Day 13 | 事件循环（宏任务/微任务）概念、fetch 调用 REST API、JSON | 用公共 API（如 jsonplaceholder）写一个列表页 |
| Day 14 | **周复习**：npm 与 package.json、用 Vite 建第一个前端工程、ESLint 基本配置 | 产出：fetch + 渲染的天气/新闻小页面 |

**本周关键点**：`async/await` ≈ C++20 coroutine 的思路但语法更简单；理解了事件循环，Vue 的响应式和生命周期就好懂了。

---

## 第 3 周：Vue 3 核心（Day 15–21）

**目标**：掌握 Vue 3 组合式 API，能写组件化的单页应用。

| 天 | 内容 | 练习 |
|----|------|------|
| Day 15 | Vue 是什么、为什么需要框架；创建 Vite + Vue 项目；单文件组件（SFC）结构 | 跑通官方 Hello World |
| Day 16 | 模板语法：插值、指令（v-if/v-for/v-bind/v-model）、事件处理 | ⚠️ v-for 必须配 key，类似 React 的 diff 要求 |
| Day 17 | 响应式：`ref`、`reactive`、`computed`、`watch` | ⚠️ ref 在 JS 里要 `.value`，模板里不用——新手第一坑 |
| Day 18 | 组件化：props 传数据、emit 传事件、插槽 slot | 拆分待办列表为多个组件 |
| Day 19 | 生命周期（onMounted/onUnmounted）、provide/inject、组合式函数（composables） | 写一个 useLocalStorage 组合式函数 |
| Day 20 | Vue Router：路由配置、动态路由、导航守卫 | 给应用加两个页面 + 路由跳转 |
| Day 21 | **周复习**：把第 1 周的待办应用用 Vue 3 重写（组件化 + 路由） | 产出：Vue 3 待办应用（多页面版） |

**本周参考**：Vue 3 官方中文文档（cn.vuejs.org）——官方文档质量极高，优先读文档而不是教程视频。

---

## 第 4 周：生态与项目实战（Day 22–30）

**目标**：补齐工程化生态，独立完成一个可以展示的完整项目。

| 天 | 内容 |
|----|------|
| Day 22 | Pinia 状态管理：defineStore、state/getters/actions；⌛ 与组件内 ref 的区别（跨组件共享） |
| Day 23 | Element Plus（或 Naive UI）组件库：表单、表格、弹窗、消息提示 |
| Day 24 | 真实接口对接：axios 封装、拦截器、loading 与错误处理、跨域概念 |
| Day 25–27 | **综合项目**（三选一，做完为止）：① 后台管理页（登录 + 表格增删改查 + 图表）② 记账本 ③ 个人导航站。要求：Vue 3 + Router + Pinia + 组件库 + mock 或真实 API |
| Day 28 | 项目打磨：表单校验、空状态/错误状态、响应式布局 |
| Day 29 | 构建与部署：`npm run build`、部署到 Vercel/Netlify 或公司内网 |
| Day 30 | **总复习**：回顾 Vue 响应式原理（知道 Proxy 实现即可）、面试常见概念（v-if vs v-show、computed vs watch、key 的作用）；规划下一步（TypeScript / 服务端渲染 Nuxt / 单元测试） |

---

## 里程碑检查表

- [ ] Day 7：纯 JS 写出带 localStorage 的待办应用
- [ ] Day 14：能用 async/await + fetch 调 API 并渲染列表
- [ ] Day 21：用 Vue 3 重写待办应用，组件拆分合理、带路由
- [ ] Day 30：独立完成一个"Router + Pinia + 组件库 + API"的完整项目并部署上线

## 给 C++ 程序员的避坑提示

1. **没有编译错误**：很多 bug 在运行时才暴露，养成开 DevTools Console 看报错的习惯。
2. **`===` vs `==`**：一律用 `===`。
3. **`this` 混乱**：组件方法里多用箭头函数或直接写内联函数，避开 `this`。
4. **引用 vs 值**：对象和数组按引用传递，和 C++ 的指针/引用语义类似，但容易忘记：`const arr = [...]` 只是引用不可变，内容仍可变。
5. **`ref` 忘 `.value`**：Vue 组合式 API 第一大坑。
6. **不要用面向对象思维硬套 Vue**：Vue 的核心是"状态 → 视图"的声明式映射，先接受数据驱动的思路。
