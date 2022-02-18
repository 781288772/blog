(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{472:function(t,e,a){"use strict";a.r(e);var s=a(17),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_2022-前端技术领域这些新变化-你准备好了吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2022-前端技术领域这些新变化-你准备好了吗"}},[t._v("#")]),t._v(" 2022 前端技术领域这些新变化，你准备好了吗？")]),t._v(" "),a("p",[t._v("注：以下只是个人比较熟悉的部分，在浩瀚的前端世界，只是沧海一粟。")]),t._v(" "),a("h1",{attrs:{id:"monorepo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monorepo"}},[t._v("#")]),t._v(" Monorepo")]),t._v(" "),a("ul",[a("li",[t._v("Monorepo 成标配，pnpm 会有更广泛的应用。")])]),t._v(" "),a("p",[t._v("Why should we use pnpm?[")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("webstorm、vscode 对 monorepo 更好的支持。现在的混合技术栈多少支持有一些问题。")]),t._v(" "),a("ul",[a("li",[t._v("例如在 webstorm 里，一个目录的 linter，使用 eslint 还是用 deno 的lint，还是其他的 lint，是比较难配置的。")]),t._v(" "),a("li",[t._v("例如在 webstorm 里，一个目录的 ts 语言服务，是用 tsc 还是 deno。")]),t._v(" "),a("li",[t._v("简单说以 monorepo 的一个子目录去选择对应的环境配置，是一个需求。")])])])]),t._v(" "),a("h1",{attrs:{id:"typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript"}},[t._v("#")]),t._v(" TypeScript")]),t._v(" "),a("ul",[a("li",[t._v("越来越多的项目选择 TypeScript。")]),t._v(" "),a("li",[t._v("TypeScript 帮助 JavaScript 世界的整体编程能力往前走了一大步，怎么感谢 Anders Hejlsberg 都不过分。他已经六十多了，还在写代码。")])]),t._v(" "),a("h1",{attrs:{id:"deno"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deno"}},[t._v("#")]),t._v(" Deno")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Deno 开始在 cli 脚本和serverless 方面展露头脚。")])]),t._v(" "),a("li",[a("p",[t._v("Deno 在传统生产项目上和 Node 仍然不会有太大的冲突。但是 Deno 在用 TS 写脚本方面，对比 Node.js 是有优势的。这一点优势应该最大化利用。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Deno 的依赖是不会污染 Npm 的，因为本身和 NPM 正交。随着项目的复杂，没人希望污染主项目。")])]),t._v(" "),a("li",[a("p",[t._v("实际上，Deno 非常适合把开发依赖都控制起来。")])]),t._v(" "),a("li",[a("p",[t._v("Deno 非常适合制作 cli，且用 cli 来抹平 NPM 和 Deno 世界的最后一公里。")]),t._v(" "),a("ul",[a("li",[t._v("虽然目前 Deno 的 swc 有各种问题，使用 bundle+compile 目前还有很多问题。")])])])])])]),t._v(" "),a("h2",{attrs:{id:"cac-with-deno"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cac-with-deno"}},[t._v("#")]),t._v(" cac#with-deno[")]),t._v(" "),a("p",[t._v("Deno 和 Node.js 世界开始融合。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("实际上，现在一大不太好融合的点，反而是 Node.js 的 ESM 问题。理论上 ESM 以后，一份 TypeScript 代码同时对 Node.js、deno、browser 变的简单了。")])]),t._v(" "),a("li",[a("p",[t._v("随着 Deno 1.0 的 API 稳定，会产生一些 Deno 和 Node 的兼容层项目产生。实际上就是把双方的 API 做一个映射。")]),t._v(" "),a("ul",[a("li",[t._v("如果有了这个兼容层，在完全使用 ESM 的情况下，主要的区别就可以慢慢退化到项目入口的包管理方式\n"),a("ul",[a("li",[t._v("NPM 是 package.json")]),t._v(" "),a("li",[t._v("Deno 是 import_map 和手动声明 http_import")])])]),t._v(" "),a("li",[t._v("实际上，还有一些区别\n"),a("ul",[a("li",[t._v("Deno 的 TypeScript 的版本，实际总比流行版本慢一些，且参数是主 TypeScript 的参数的一个子集，且一些参数不能更改。")]),t._v(" "),a("li",[t._v("Deno 试图把一个编译型语言 TypeScript 变成一个像 JavaScript 一样的即时解释型语言，但是 TypeScript 写的复杂了，编译还是比较慢的。这一块会有什么问题，暂时未知。")])])])])])]),t._v(" "),a("h1",{attrs:{id:"node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js"}},[t._v("#")]),t._v(" Node.js")]),t._v(" "),a("p",[t._v("Node.js 的 TypeScript 世界开始 ESM 化，这个要看 4.6")]),t._v(" "),a("p",[t._v("Concerns with TypeScript 4.5's Node 12+ ESM Support #46452")]),t._v(" "),a("h1",{attrs:{id:"esbuild"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esbuild"}},[t._v("#")]),t._v(" ESBuild")]),t._v(" "),a("p",[t._v("esbuild 慢慢生产可用。太快了，这一点对很多项目吸引太大了，下面的那个链接里介绍，一个 30 min 的 webpack 用 esbuild 可以分钟级运行。而且 figma 的 cto（也就是 esbuild 的作者，国内还有 cto 写代码么？）头脑非常清醒，esbuild 整个做的技术选择，以及目前该项目的影响力，对于前端世界的影响有可能持续加大。")]),t._v(" "),a("h1",{attrs:{id:"javascript-装饰器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-装饰器"}},[t._v("#")]),t._v(" JavaScript 装饰器")]),t._v(" "),a("p",[t._v("JavaScript 的装饰器可能快来了。可能是最特殊的一个 JavaScript 的语法特性。这个对一堆现有的 TypeScript 装饰器框架都是潜在利空。实际上，现有的 TypeScript 装饰器框架都和 esbuild 或多或少有冲突。而 esbuild 带来的诸多好处，对于新项目是否上 TypeScript 临时的装饰器，还是等 JavaScript 的装饰器，提出了一个至少是需要想一想的问题。")]),t._v(" "),a("p",[t._v("这个对于 TypeScript 世界的一部分，有可能是核弹级的。有兴趣的同学可以去翻翻 esbuild 的 issue，看看为啥 evan 不支持 TypeScript 的 emitDecoratorMetadata。")]),t._v(" "),a("h1",{attrs:{id:"javascript-基建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-基建"}},[t._v("#")]),t._v(" JavaScript 基建")]),t._v(" "),a("p",[t._v("JS 和 TS 的核心基建 Rust 化，相应的基建可以开始投入生产了。例如 swc、rome、deno。等等。对这块感兴趣的同学可以去看看 deno 的 build 的 issue。我只能说，swc 还有很长的路要走。esbuild 和 swc 的结果，会极大影响 go 和 rust 在 JS & TS 世界的关系。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Hugo：RUST 是 JavaScript 基建的未来: \nhttps://zhuanlan.zhihu.com/p/433300816 \n")])])]),a("p",[t._v("前端语言的集中化：Rust->Go->TypeScript->JavaScript，这四门语言大概能组成整个 JS 和 TS 世界的 99%？")]),t._v(" "),a("h1",{attrs:{id:"javascript-模块化-esm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-模块化-esm"}},[t._v("#")]),t._v(" JavaScript 模块化 ESM")]),t._v(" "),a("p",[t._v("ESM 继续推进。这一点对于微前端解决方案是极大利好。会有新的微前端解决方案出现，会比 Modern.js 轻很多。会出现类似 Modern.js 的 cli 编译打包方案。其实建议 Modern.js 把这一块提出来单独弄一个项目，这一块在个人看来是 Modern.js 最 Modern 的地方。")]),t._v(" "),a("ul",[a("li",[t._v("个人认为，这个最终方案大概率是\n"),a("ul",[a("li",[t._v("对 pnpm 亲和")]),t._v(" "),a("li",[t._v("对 TypeScript 的 Type 亲和")]),t._v(" "),a("li",[t._v("只支持 ESM")]),t._v(" "),a("li",[t._v("基于 esbuild（也就代表着，几乎不用 TypeScript 自带的语法特性）")]),t._v(" "),a("li",[t._v("有类似 fastify 或者 rollup 的插件系统")]),t._v(" "),a("li",[t._v("主框架可能是 go 编写的")]),t._v(" "),a("li",[t._v("能提供处理依赖 DAG 方面的工具")]),t._v(" "),a("li",[t._v("提供 cli")])])])]),t._v(" "),a("h1",{attrs:{id:"css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),a("p",[t._v("TailwindCSS 进一步得到应用和流行。年底发布 3.0, TailwindCSS 的作者很有想法。\nTailwind CSS v3.0 – Tailwind CSS: https://tailwindcss.com/blog/tailwindcss-v3")]),t._v(" "),a("h1",{attrs:{id:"vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[t._v("#")]),t._v(" Vue")]),t._v(" "),a("p",[t._v("Vue 3 进一步流行。期望 TS 官方能像对待 React 一样对待 Vue 3。")]),t._v(" "),a("h1",{attrs:{id:"vite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vite"}},[t._v("#")]),t._v(" Vite")]),t._v(" "),a("p",[t._v("Vite 有望成为最好和最快的前端开发环境。个人认为，Vite 其实应该集成一些 Deno 的支持。Vite 和 Deno 在一起能做点什么？目前没想到。")]),t._v(" "),a("h1",{attrs:{id:"nuxt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuxt"}},[t._v("#")]),t._v(" Nuxt")]),t._v(" "),a("p",[t._v("uxt 3.0 正式版发布。Nuxt 3.0 对于 Vue 的 SSR 世界，应该是质的改变的一个版本，这个版本对于 Nuxt 团队也是非常挑战的，他们用 TS 完全重写了 Nuxt")]),t._v(" "),a("h1",{attrs:{id:"js-ts-应用工具型-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-ts-应用工具型-app"}},[t._v("#")]),t._v(" JS & TS 应用工具型 APP")]),t._v(" "),a("p",[t._v("工具创业进一步恶化，各种工具的开源版本雨后春笋般出现。本质是工具抽象的普遍普及化，也是前端世界上一阶段的积累开花结果的情况。有意思的是，据我从 github 的 trending 上来看，这些项目，大部分还都是国人所做，质量很高，但是同质化很严重。")]),t._v(" "),a("h1",{attrs:{id:"最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),a("p",[t._v("其实这些变化，单看每个都不复杂，基本上：")]),t._v(" "),a("p",[t._v("老的标准慢慢废弃，选择新的标准，例如 ESM\n开始对快有一些追求，例如 esbuild、vite\n更原子化的抽象，例如 Tailwind CSS\n更多的类型，更多的约束，例如 TypeScript 的持续流行\n潜在的，更多的函数式。实际上这里面很多项目，去看源代码基本都是函数式编程。这一点，其实变成了一种分工分界线，函数式编程，对于广大的应用的编程领域来说，还是太难了，但是对于基建和框架范畴，基本都是函数式编程。在 TypeScript 和 JavaScript 的世界，貌似没有第二种选择。当然这一点，本质是更抽象和模型与更原子的语义化。（函数式的一切都是为了 compose，实际上这一点能涵盖上面那几点）\n所有这些变化，都是为了开发更复杂的应用。\n你准备好了么？")])])}),[],!1,null,null,null);e.default=i.exports}}]);