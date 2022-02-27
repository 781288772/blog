(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{546:function(t,e,r){"use strict";r.r(e);var v=r(21),n=Object(v.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"github-jsdelivr-tinypng-picgo-打造稳定快速、高效免费图床"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#github-jsdelivr-tinypng-picgo-打造稳定快速、高效免费图床"}},[t._v("#")]),t._v(" GitHub + jsDelivr + TinyPNG+ PicGo 打造稳定快速、高效免费图床")]),t._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),r("p",[r("strong",[t._v("Q：为什么要使用图床呢？什么是图床？")])]),t._v(" "),r("p",[t._v("A：写博客文章时，图片的上传和存放是一个问题，有的朋友可能会把图片放到和博客同一个仓库当中，使用相对路径来引用，这样后期维护起来会比较麻烦。还有的朋友会在不同的平台发布同一篇文章，这样一来每个平台都要上传图片，为了解决这些问题，比较推荐的做法是把图片统一上传到一个在线的第三方静态资源库中，我们把这个资源库称为图床，其返回一个图片的URL，使用"),r("code",[t._v("markdown+图片url")]),t._v("的方式写作文章，一次编写，到处使用~")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("更好的选择...")]),t._v(" "),r("p",[t._v("以下内容是比较旧的，现在我发现一个更好用，配置更方便的图床工具："),r("a",{attrs:{href:"https://picx.xpoet.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://picx.xpoet.cn/"),r("OutboundLink")],1),t._v("\n使用方法看一下他网站的使用教程就行。 撒由那拉~~")]),t._v(" "),r("div",{staticClass:"custom-block right"},[r("p",[t._v("2021.07.04")])])]),t._v(" "),r("p",[r("strong",[t._v("Q：图床的选择")])]),t._v(" "),r("p",[t._v("A：推荐使用GitHub作为图床，特点是免费、稳定，有一个小缺点是国内访问速度慢，不过没关系，可以使用"),r("code",[t._v("jsDelivr")]),t._v("免费CDN加速。")]),t._v(" "),r("p",[r("strong",[t._v("Q：jsDelivr是什么？")])]),t._v(" "),r("p",[t._v("A："),r("code",[t._v("jsDelivr")]),t._v("是国外的一家优秀的公共 CDN 服务提供商，该平台是首个「打通中国大陆与海外的免费CDN服务」，无须担心中国防火墙问题而影响使用。官网："),r("a",{attrs:{href:"http://www.jsdelivr.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.jsdelivr.com/"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"图床打造"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图床打造"}},[t._v("#")]),t._v(" 图床打造")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("新建GitHub仓库，注意仓库要设置成"),r("strong",[t._v("公开")])])]),t._v(" "),r("li",[r("p",[t._v("参照 "),r("a",{attrs:{href:"https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),r("OutboundLink")],1),t._v(" 生成一个token密钥")])]),t._v(" "),r("li",[r("p",[t._v("在 "),r("a",{attrs:{href:"https://github.com/Molunerfinn/picgo/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),r("OutboundLink")],1),t._v(" 下载PicGo，安装完成后打开，"),r("code",[t._v("图床设置")]),t._v(" 选 "),r("code",[t._v("GitHub图床")]),t._v("，并填写相应的信息")]),t._v(" "),r("ul",[r("li",[t._v("仓库名：前面新建的仓库，格式："),r("code",[t._v("<用户名>/<仓库名>")])]),t._v(" "),r("li",[t._v("分支名：填写主分支"),r("code",[t._v("master")]),t._v("即可")]),t._v(" "),r("li",[t._v("Token：前面生成的token密钥")]),t._v(" "),r("li",[t._v("存储路径：按你自己的需求填写")]),t._v(" "),r("li",[t._v("自定义域名：图片上传后，PicGo 会按照 "),r("code",[t._v("自定义域名+上传的图片名")]),t._v(" 的方式生成访问链接，此处我们填写"),r("code",[t._v("jsDelivr")]),t._v("的CDN加速地址，格式："),r("code",[t._v("https://cdn.jsdelivr.net/gh/<用户名>/<仓库名>")])])])])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103105720.png",alt:""}})]),t._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[t._v("使用"),r("a",{attrs:{href:"https://tinypng.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://tinypng.cn/"),r("OutboundLink")],1),t._v("压缩你要上传的图片（如图片已经很小或你有更好的压缩工具可省略这一步）")]),t._v(" "),r("li",[t._v("在PigGo的"),r("code",[t._v("上传区")]),t._v("上传你的图片，到"),r("code",[t._v("相册")]),t._v("一键复制刚刚上传的图片URL，至此，你就可以在你的文章当中愉快的插入图片啦~， 更多功能自己去探索吧~~")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103121148.png",alt:""}})])])}),[],!1,null,null,null);e.default=n.exports}}]);