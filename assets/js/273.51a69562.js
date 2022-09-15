(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{600:function(s,t,e){"use strict";e.r(t);var n=e(4),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("控制器")]),s._v(" "),t("p",[s._v("控制器负责处理传入的请求和向客户端返回响应。")]),s._v(" "),t("p",[s._v("控制器的目的是接收应用的特定请求。路由机制控制哪个控制器接收哪些请求。通常，每个控制器有多个路由，不同的路由可以执行不同的操作。")]),s._v(" "),t("p",[s._v("为了创建一个基本的控制器，我们使用类和装饰器。装饰器将类与所需的元数据相关联，并使 Nest 能够创建路由映射（将请求绑定到相应的控制器）。")]),s._v(" "),t("p",[s._v("路由\n在下面的例子中，我们使用 @Controller() 装饰器定义一个基本的控制器。可选 路由路径前缀设置为 cats。在 @Controller() 装饰器中使用路径前缀可以使我们轻松地对一组相关的路由进行分组，并最大程度地减少重复代码。例如，我们可以选择将一组用于管理与 /customers 下的客户实体进行互动的路由进行分组。这样，我们可以在 @Controller() 装饰器中指定路径前缀 customers，这样就不必为文件中的每个路由重复路径的那部分。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/* cats.controller.ts */\n\nimport { Controller, Get } from '@nestjs/common';\n\n@Controller('cats')\nexport class CatsController {\n  @Get()\n  findAll(): string {\n    return 'This action returns all cats';\n  }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("要使用 CLI 创建控制器，只需执行 $ nest g controller cats 命令。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("findAll() 方法之前的 @Get() HTTP 请求方法装饰器告诉 Nest 为 HTTP 请求的特定端点创建处理程序。端点对应于 HTTP 请求方法（在本例中为 GET ）和路由路径（如 GET /customer ）。什么是路由路径 ？ 一个处理程序的路由路径是通过连接为控制器 （Controller） 声明的（可选）前缀和请求装饰器中指定的任何路径来确定的。由于我们已经为每个 route（cats） 声明了一个前缀，并且没有在装饰器中添加任何路由信息，因此 Nest 会将 GET /cats 请求映射到此处理程序。如上所述，该路径包括可选的控制由路径前缀和请求方法装饰器中声明的任何路径字符串。例如，路径前缀 customers 与装饰器 @Get('profile') 组合会为 GET /customers/profile 请求生成路由映射。")]),s._v(" "),t("p",[s._v("在上面的示例中，当对此端点发出 GET 请求时， Nest 会将请求路由到我们的自定义的 findAll() 方法。请注意，我们在此处选择的函数名称完全是任意的。显然，我们必须声明一个绑定到路由的函数，但 Nest 不会对所选的函数名称附加任何意义。（译者注：即路由与处理函数命名无关）")]),s._v(" "),t("p",[s._v("此函数将返回 200 状态代码和相关的响应，在本例中只返回了一个字符串。为什么会这样？ 为了解释原因，首先我们将介绍 Nest 使用两种不同的操作响应选项的概念：")]),s._v(" "),t("p",[s._v("标准（推荐）\t使用这个内置方法，当请求处理程序返回一个 JavaScript 对象或数组时，它将自动序列化为 JSON。但是，当它返回一个 JavaScript 基本类型（例如string、number、boolean）时， Nest 将只发送值，而不尝试序列化它。这使响应处理变得简单：只需要返回值，其余的由 Nest 负责。\n类库特有的\t我们可以在函数签名处通过 @Res() 注入类库特定的响应对象（例如， Express）。使用此方法，你就能使用由该响应对象暴露的原生响应处理函数。例如，使用 Express，您可以使用 response.status(200).send() 构建响应")]),s._v(" "),t("p",[s._v("注意！Nest 检测处理程序何时使用 @Res() 或 @Next()，表明你选择了特定于库的选项。如果在一个处理函数上同时使用了这两个方法，那么此处的标准方式就是自动禁用此路由, 你将不会得到你想要的结果。如果需要在某个处理函数上同时使用这两种方法（例如，通过注入响应对象，单独设置 cookie / header，但把其余部分留给框架），你必须在装饰器 @Res({ passthrough: true }) 中将 passthrough 选项设为 true")])])}),[],!1,null,null,null);t.default=r.exports}}]);